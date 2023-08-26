import fs from "fs";
import {readStatFile} from "../../services/file.mjs";
import Order from "../../models/Order.mjs";
import User from "../../models/User.mjs";

export async function readFileAsArray (request,response){
    const data = readStatFile();

    // const users = await User.findAll();
    const userList = []
    const orders = await Order.findAll();
    // console.log(orders);
    // for(const user of users){
    //     const orders = await user.getOrders()
    //     userList.push({ user, orders})
    // }

    for(const order of orders){
        const user = await orders.User
        userList.push({order, user})
    }


    // response.status(200).send(data ? data : []);
    response.status(200).send(userList);

}
