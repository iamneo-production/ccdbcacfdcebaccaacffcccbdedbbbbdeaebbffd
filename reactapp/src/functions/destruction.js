function getUserIpDetails(userResponse = {}) {
    const {userIp = '0.0.0.0', userName} = userResponse;
    return [userName, userIp];
  }
  
  function getTopThree(studentMarks = []) {
    const [first = null, second = null, third = null, ...rest] = studentMarks;
    return [first, second, third].sort();
  }
  
  export {getUserIpDetails,getTopThree}