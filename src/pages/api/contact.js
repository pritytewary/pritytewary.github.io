import { errorHandler } from "../../lib/api/error";

import Contact from "../../models/Contact";

import { connectDB } from "../../lib/api/index";

export default async function contact(req, res) {
  try {
    await connectDB();
    const body = req.body;

    const create = await Contact.create({
      name: body.name,
      phone: body.phone,
      email: body.email,
      message: body.message,
      subject: body.subject,
    });

    res.json({
      message: "message send successfully",
      result: create,
    });
  } catch (error) {
    return errorHandler(error, res, {
      message: "message was not send",
    });
  }
}
