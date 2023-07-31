function getUserIpDetails(userResponse = {}) {
    const {userIp = '0.0.0.0', userName} = userResponse;
    return [userName, userIp];
  }
  
  function getTopThree(studentMarks = []) {
    const [first = null, second = null, thirdMark = null] = studentMarks;
    return [first, second, thirdMark].sort();
  }
  
  // console.log(getTopThree([10, 20, 30])); // [10, 20, 30]
  // console.log(getTopThree([10])); // [10, null, null]
  
  export { getUserIpDetails,getTopThree};