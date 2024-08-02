import { toast } from "react-hot-toast"

import { apiConnector } from "../apiconnector"
import { contactusEndpoint } from "../apis"

const { CONTACT_US_API } = contactusEndpoint

export const contactUs = async (data) => {
    const toastId = toast.loading("Loading...")
    try {
      await apiConnector("POST", CONTACT_US_API, data)

      toast.success("Send Meassge Successful")

    } catch (error) {
      console.log("CONTACT_US_API API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
}