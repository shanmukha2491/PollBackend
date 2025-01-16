import { Poll } from "../../models/poll.model.js";
import { Room } from "../../models/room.model.js";
import ApiResponse from "../../utils/ApiResponse.js";

const getPolls = async (req, res) => {
  try {
      const { roomId } = req.params;
      // Find the room by its ID
      const existingRoom = await Poll.find({ roomId }).sort({ createdAt: -1 });
      console.log(existingRoom);
      
    if (!existingRoom) {
      return res
        .status(404)
        .send(new ApiResponse(404, null, "Invalid room id."));
    }

    // const pollhistory = existingRoom.poll.options

    res.status(200).send(
      new ApiResponse(200, { room :existingRoom }, "Polls fetched successfully.")
    );
  } catch (error) {
    console.error("Error fetching polls:", error);
    res.status(500).send(new ApiResponse(500, error, "Failed to fetch polls."));
  }
};

export default getPolls;



