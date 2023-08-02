// reactapp/src/functions/destructuring.js

// Function to get user IP details
function getUserIpDetails(userResponse = {}) {
  // Destructure userIp and userName from userResponse object with default values
    const { userIp = '0.0.0.0', userName } = userResponse;
      
        // Return an array containing the userName and userIp
          return [userName, userIp];
          }

          // Function to get the top three student marks
          function getTopThree(studentMarks = []) {
            // Destructure the first three marks from the studentMarks array with a default value of null
              const [mark1 = null, mark2 = null, mark3 = null] = studentMarks;

                // Return the top three student details (marks)
                  return [mark1, mark2, mark3];
                  }

                  module.exports = {
                    getUserIpDetails,
                      getTopThree,
                      };
                      