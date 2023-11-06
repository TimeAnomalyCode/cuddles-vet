import { db } from "$lib/firebase/firebase.server";
import { firestore } from "firebase-admin";
import { deleteFolderFromBucket, saveFileToBucket } from "$lib/firebase/firestorage.server";

// Doctors
export async function addDoctor(doctor) {
    const doctorCollection = db.collection('doctors')

    const doctorRef = await doctorCollection.add({
        name: doctor.name,
        position: doctor.position,
        description: doctor.description,
        rating: 0,
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

export async function addProduct(product) {
    const productCollection = db.collection('products')

    const productRef = await productCollection.add({
        name: product.name,
        price: product.price,
        description: product.description,
        num_of_sold: 0,
        rating: 0,
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

export async function addAppointment(appointment) {
    const appointmentCollection = db.collection('appointments')

    const appointmentRef = await appointmentCollection.add({
        doctor_id: appointment.doctor_id,
        user_id: appointment.user_id,
        appointment_date: appointment.appointment_date,
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

export async function addCart(cart) {
    const cartCollection = db.collection('carts')

    const cartRef = await cartCollection.add({
        user_id: cart.user_id,
        items: cart.items,
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

export async function addOrder(order) {
    const orderCollection = db.collection('orders')

    const orderRef = await orderCollection.add({
        user_id: order.user_id,
        cart_id: order.cart_id,
        total_price: order.total_price,
        isApproved: "pending",
        created_at: firestore.Timestamp.now().seconds,
    })

    const mainPictureUrl = await saveFileToBucket(order.main_picture, `order_images/${orderRef.id}/main_picture_${firestore.Timestamp.now().seconds}`)

    await orderRef.update({
        main_picture: mainPictureUrl
    })

    return orderRef.id
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