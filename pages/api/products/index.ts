import { NextApiRequest, NextApiResponse } from "next";
import { sampleProductData } from "../../../utils/sample-product-data";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleProductData)) {
      throw new Error("Cannot find product data");
    }

    //res.status(200).json(sampleProductData);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
