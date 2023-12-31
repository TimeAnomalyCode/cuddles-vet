import { db } from "$lib/firebase/firebase.server";
import { firestore } from "firebase-admin";
import { deleteFolderFromBucket, saveFileToBucket } from "$lib/firebase/firestorage.server";

// User
export async function addProfile(profile) {
    const profileCollection = db.collection('profiles').doc(profile.user_id)

    await profileCollection.set({
        has_set_profile: true,
        user_id: profile.user_id,
        name: profile.name || "",
        birthday: profile.birthday || "",
        address: profile.address || "",
        phone_number: profile.phone_number || "",
        role: "customer",
        created_at: firestore.Timestamp.now().seconds,
    })

    // const mainPictureUrl = await saveFileToBucket(profile.main_picture, `profile_images/${profileRef.id}/main_picture_${firestore.Timestamp.now().seconds}`)

    const mainPictureUrl = `https://placehold.co/500?text=${profile.name[0]}`

    await profileCollection.update({
        main_picture: mainPictureUrl
    })

    return profileCollection.id
}

export async function editProfile(id, form) {
    const profileRef = db.collection('profiles').doc(id)
    let mainPicture = form.main_picture || null

    delete form.main_picture

    await profileRef.update(form)

    if (typeof mainPicture === 'string' && mainPicture.includes('placehold')) {
        await profileRef.update({ main_picture: mainPicture })
        return
    }

    if (mainPicture) {
        const mainPictureUrl = await saveFileToBucket(mainPicture, `profile_images/${profileRef.id}/main_picture_${firestore.Timestamp.now().seconds}`)
        await profileRef.update({ main_picture: mainPictureUrl })
    }
}

export async function getProfile(id) {
    const profileRef = await db.collection('profiles').doc(id).get()

    if (profileRef.exists) {
        return { id: profileRef.id, ...profileRef.data() }
    }
}

export async function deleteProfile(id) {
    const profileRef = db.collection('profiles').doc(id)

    // delete from cloud storage (img)
    if ((await profileRef.get()).exists) {
        await deleteFolderFromBucket(`profile_images/${profileRef.id}`)
        await profileRef.delete()
    }

}

// Doctors
export async function getAllDoctors() {
    const doctorCollection = await db.collection('doctors').get()

    /**
     * @type {{ id: string; }[]}
     */
    const doctors = []
    doctorCollection.docs.forEach((doc) => {
        doctors.push({ id: doc.id, ...doc.data() })
    })

    return doctors
}

export async function getAvailableDoctor() {
    const doctorCollection = await db.collection('doctors').get()


}

export async function addDoctor(doctor) {
    const doctorCollection = db.collection('doctors')

    const doctorRef = await doctorCollection.add({
        name: doctor.name,
        position: doctor.position,
        description: doctor.description,
        created_at: firestore.Timestamp.now().seconds,
    })

    const mainPictureUrl = await saveFileToBucket(doctor.main_picture, `doctor_images/${doctorRef.id}/main_picture_${firestore.Timestamp.now().seconds}`)

    await doctorRef.update({
        main_picture: mainPictureUrl
    })

    return doctorRef.id
}

export async function editDoctor(id, form) {
    const doctorRef = db.collection('doctors').doc(id)
    let mainPicture = form.main_picture || null

    delete form.main_picture

    await doctorRef.update(form)

    if (mainPicture) {
        const mainPictureUrl = await saveFileToBucket(mainPicture, `doctor_images/${doctorRef.id}/main_picture_${firestore.Timestamp.now().seconds}`)
        doctorRef.update({ main_picture: mainPictureUrl })
    }
}

export async function getDoctor(id) {
    const doctorRef = await db.collection('doctors').doc(id).get()

    if (doctorRef.exists) {
        return { id: doctorRef.id, ...doctorRef.data() }
    }
}

export async function deleteDoctor(id) {
    const doctorRef = db.collection('doctors').doc(id)

    // delete from cloud storage (img)
    if ((await doctorRef.get()).exists) {
        await deleteFolderFromBucket(`doctor_images/${doctorRef.id}`)
        await doctorRef.delete()
    }

}

// Products
export async function addNumOfSold(id, num) {
    const productCollection = db.collection('products').doc(id)

    await productCollection.update({
        num_of_sold: firestore.FieldValue.increment(num)
    })
}

export async function getAllProducts() {
    const productCollection = await db.collection('products').get()

    /**
     * @type {{ id: string; }[]}
     */
    const products = []
    productCollection.docs.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() })
    })

    return products
}

export async function addProduct(product) {
    const productCollection = db.collection('products')

    const productRef = await productCollection.add({
        name: product.name,
        price: product.price,
        description: product.description,
        num_of_sold: 0,
        created_at: firestore.Timestamp.now().seconds,
    })

    const mainPictureUrl = await saveFileToBucket(product.main_picture, `product_images/${productRef.id}/main_picture_${firestore.Timestamp.now().seconds}`)

    await productRef.update({
        main_picture: mainPictureUrl
    })

    return productRef.id
}

export async function editProduct(id, form) {
    const productRef = db.collection('products').doc(id)
    let mainPicture = form.main_picture || null

    delete form.main_picture

    await productRef.update(form)

    if (mainPicture) {
        const mainPictureUrl = await saveFileToBucket(mainPicture, `product_images/${productRef.id}/main_picture_${firestore.Timestamp.now().seconds}`)
        productRef.update({ main_picture: mainPictureUrl })
    }
}

export async function getProduct(id) {
    const productRef = await db.collection('products').doc(id).get()

    if (productRef.exists) {
        return { id: productRef.id, ...productRef.data() }
    }
}

export async function deleteProduct(id) {
    const productRef = db.collection('products').doc(id)

    // delete from cloud storage (img)
    if ((await productRef.get()).exists) {
        await deleteFolderFromBucket(`product_images/${productRef.id}`)
        await productRef.delete()
    }
}

// Appointments
export async function getAllAppointments(id) {
    const orderCollection = await db.collection('appointments').where('user_id', '==', id).get()

    const orders = []
    for (const doc of orderCollection.docs) {
        const data = doc.data()
        const doctorInfo = await getDoctor(data.doctor_id)
        orders.push(JSON.parse(
            JSON.stringify(
                {
                    id: doc.id,
                    date: data.appointment_date.toDate(),
                    start_time: data.appointment_start_time.toDate(),
                    end_time: data.appointment_end_time.toDate(),
                    type_of_operation: data.type_of_operation,
                    doctor: doctorInfo,
                }
            )
        )
        )
    }

    return orders
}

export async function checkAppointmentAvailable(doctor_id, start_time, end_time) {
    const start_date = new Date()
    start_date.setHours(0, 0, 0, 0)

    const end_date = new Date()
    end_date.setHours(0, 0, 0, 0)
    end_date.setDate(end_date.getDate() + 1)

    const todayAppointmentRef = await db.collection('appointments')
        .where('appointment_date', '>=', start_date)
        .where('appointment_date', '<=', end_date)
        .where('doctor_id', '==', doctor_id)
        .get()

    // console.log(appointmentRef.docs)
    // console.log(firestore.Timestamp.fromDate(date))
    if (todayAppointmentRef.empty) {
        return true
    }

    for (const apt of todayAppointmentRef.docs) {
        const data = { ...apt.data() }
        // console.log(data)
        // console.log("StartTime", start_time <= data.appointment_start_time.toDate())
        // console.log("User Start", start_time.toString())
        // console.log("Apt Start ", data.appointment_start_time.toDate().toString())

        // console.log("EndTime", end_time >= data.appointment_end_time.toDate())
        // console.log("User End", end_time.toString())
        // console.log("Apt End ", data.appointment_end_time.toDate().toString())

        const appointment_start_time = data.appointment_start_time.toDate()
        const appointment_end_time = data.appointment_end_time.toDate()

        if (
            (start_time <= appointment_end_time && end_time >= appointment_end_time) ||
            (start_time >= appointment_start_time && start_time < appointment_end_time) ||
            (end_time > appointment_start_time && end_time <= appointment_end_time)
        ) {
            return false
        }
    }

    return true
}

export async function addAppointment(appointment) {
    const appointmentCollection = db.collection('appointments')

    const appointmentRef = await appointmentCollection.add({
        doctor_id: appointment.doctor_id,
        user_id: appointment.user_id,
        appointment_date: firestore.Timestamp.fromDate(appointment.appointment_date),
        appointment_start_time: firestore.Timestamp.fromDate(appointment.appointment_start_time),
        appointment_end_time: firestore.Timestamp.fromDate(appointment.appointment_end_time),
        type_of_operation: appointment.type_of_operation,
        created_at: firestore.Timestamp.now().seconds,
    })

    return appointmentRef.id
}

export async function editAppointment(id, form) {
    const appointmentRef = db.collection('appointments').doc(id)
    await appointmentRef.update(form)
}

export async function getAppointment(id) {
    const appointmentRef = await db.collection('appointments').doc(id).get()

    if (appointmentRef.exists) {
        return { id: appointmentRef.id, ...appointmentRef.data() }
    }
}

export async function deleteAppointment(id) {
    const appointmentRef = db.collection('appointments').doc(id)

    // delete from cloud storage (img)
    if ((await appointmentRef.get()).exists) {
        await appointmentRef.delete()
    }
}

// Reviews

export async function addReview(review) {
    const reviewCollection = db.collection('reviews')

    const reviewRef = await reviewCollection.add({
        user_id: review.user_id,
        review_date: firestore.Timestamp.now(),
        comment: review.comment,
        likes: 0,
        created_at: firestore.Timestamp.now().seconds,
    })

    return reviewRef.id
}

export async function editReview(id, form) {
    const reviewRef = db.collection('reviews').doc(id)
    await reviewRef.update(form)
}

export async function getReview(id) {
    const reviewRef = await db.collection('reviews').doc(id).get()

    if (reviewRef.exists) {
        return { id: reviewRef.id, ...reviewRef.data() }
    }
}

export async function deleteReview(id) {
    const reviewRef = db.collection('reviews').doc(id)

    // delete from cloud storage (img)
    if ((await reviewRef.get()).exists) {
        await reviewRef.delete()
    }
}

// Cart

export async function getLatestCart(user_id) {
    const cartRef = await db.collection('carts')
        .where("user_id", '==', user_id)
        .where("is_current_cart", '==', true)
        .orderBy("created_at", 'desc')
        .limit(1)
        .get()

    if (!cartRef.empty) {
        return { has_cart: true, cart: cartRef.docs[0] }
    }
    return { has_cart: false, cart: null }
}

export async function removeItemFromCart(cart_id, item) {
    const cartRef = db.collection('carts').doc(cart_id)

    // console.log(itemToBeRemoved)

    await cartRef.update({
        items: firestore.FieldValue.arrayRemove(item)
    })
}

export async function appendNewItemToCart(id, item) {
    const cartRef = db.collection('carts').doc(id)
    await cartRef.update({
        items: firestore.FieldValue.arrayUnion(item)
    })
}

export async function addCart(cart) {
    const cartCollection = db.collection('carts')

    const cartRef = await cartCollection.add({
        user_id: cart.user_id,
        items: cart.items,
        is_current_cart: true,
        created_at: firestore.Timestamp.now().seconds,
    })

    return cartRef.id
}

export async function editCart(id, form) {
    const cartRef = db.collection('carts').doc(id)
    await cartRef.update(form)
}

export async function getCart(id) {
    const cartRef = await db.collection('carts').doc(id).get()

    if (cartRef.exists) {
        return { id: cartRef.id, ...cartRef.data() }
    }
}

export async function deleteCart(id) {
    const cartRef = db.collection('carts').doc(id)

    // delete from cloud storage (img)
    if ((await cartRef.get()).exists) {
        await cartRef.delete()
    }
}

// Orders + Approve/Deny
export async function getAllOrders(id) {
    const orderCollection = await db.collection('orders').where('user_id', '==', id).get()

    /**
     * @type {{ id: string; }[]}
     */
    const orders = []
    orderCollection.docs.forEach((doc) => {
        const created_at = doc.data().created_at * 1000
        const order_date = firestore.Timestamp.fromMillis(created_at)
        orders.push({ id: doc.id, ...doc.data(), order_date: order_date.toDate() })
    })

    return orders
}

export async function changeOrderStatus(order_id, status) {
    const orderRef = db.collection('orders').doc(order_id)

    let approve_string = "denied"
    if (status) {
        approve_string = "approve"
    }

    await orderRef.update({
        is_approved: approve_string
    })
}

export async function addOrder(order) {
    const orderCollection = db.collection('orders')

    const orderRef = await orderCollection.add({
        user_id: order.user_id,
        cart_id: order.cart_id,
        cart_items: order.cart_items,
        address: order.address,
        total_price: order.total_price,
        is_approved: "pending",
        main_picture: "",
        created_at: firestore.Timestamp.now().seconds,
    })

    // const mainPictureUrl = await saveFileToBucket(order.main_picture, `order_images/${orderRef.id}/main_picture_${firestore.Timestamp.now().seconds}`)

    // await orderRef.update({
    //     main_picture: mainPictureUrl
    // })

    return orderRef.id
}

export async function editImageOrder(id, form) {
    const orderRef = db.collection('orders').doc(id)
    let mainPicture = form.main_picture || null

    delete form.main_picture

    if (mainPicture) {
        const mainPictureUrl = await saveFileToBucket(mainPicture, `order_images/${orderRef.id}/main_picture_${firestore.Timestamp.now().seconds}`)
        orderRef.update({ main_picture: mainPictureUrl })
    }
}

export async function editOrder(id, form) {
    const orderRef = db.collection('orders').doc(id)
    let mainPicture = form.main_picture || null

    delete form.main_picture

    await orderRef.update(form)

    if (mainPicture) {
        const mainPictureUrl = await saveFileToBucket(mainPicture, `order_images/${orderRef.id}/main_picture_${firestore.Timestamp.now().seconds}`)
        orderRef.update({ main_picture: mainPictureUrl })
    }
}

export async function getOrder(id) {
    const orderRef = await db.collection('orders').doc(id).get()

    if (orderRef.exists) {
        return { id: orderRef.id, ...orderRef.data() }
    }
}

export async function deleteOrder(id) {
    const orderRef = db.collection('orders').doc(id)

    // delete from cloud storage (img)
    if ((await orderRef.get()).exists) {
        await deleteFolderFromBucket(`order_images/${orderRef.id}`)
        await orderRef.delete()
    }
}

// Contact
export async function addContact(contact) {
    const contactCollection = db.collection('contacts')

    const contactRef = await contactCollection.add({
        name: contact.name,
        email: contact.email,
        message: contact.message,
        has_responded: false,
        created_at: firestore.Timestamp.now().seconds,
    })

    return contactRef.id
}