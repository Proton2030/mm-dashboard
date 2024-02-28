import axios from "axios";

export const verifyUser = async (userObjectId: any, userVerified: boolean) => {
  try {
    const response = await axios.patch(
      "http://ec2-65-1-183-77.ap-south-1.compute.amazonaws.com:8181/api/v1/user/update-user-details",
      {
        userDetails: { is_verified: userVerified },
        userObjectId: userObjectId, // Assuming user object has an _id field
      }
    );
    console.log("Verified status changed successfully:", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
