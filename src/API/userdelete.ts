import axios from "axios";

export const deleteUser = async (userObjectId: any) => {
  try {
    const response = await axios.delete(
      "http://65.1.183.77:8989/api/v1/user/delete-user",
      {
        data: {
          userObjectId: userObjectId,
        },
      }
    );
    console.log("User deleted successfully:", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
