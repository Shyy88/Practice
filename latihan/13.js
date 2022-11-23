function fill(data, value, start, end) {
    if (!data || !value) {
        return 'Invalid Input'
    }
    let result = [];
    while (true) {
        for (let i = 0; i < data.length; i++) {
            if (i >= start && i <= end) {
                result.push(value)
            } else if (i >= start) {
                result.push(value)
            } else if (!end && !start) {
                result.push(value)
            } else {
                result.push(data[i])
            }
        }
        break;
    }
    return result
} 

  console.log(fill()); 
  // Invalid input
  console.log(fill(["Alpha", "Beta", "Charlie", "Delta", "Echo"])); 
  // Invalid input
  console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Echo", 2, 4));
  // [ 'Alpha', 'Beta', 'Echo', 'Echo' ]
  console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Juliett", 3, 20)); 
  // [ 'Alpha', 'Beta', 'Charlie', 'Juliett' ]
  console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Foxtrot", 1, 3));
  // ['Alpha', 'Foxtrot', 'Foxtrot', 'Delta' ] 
  console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Golf", 0, 1)); 
  // [ 'Golf', 'Beta', 'Charlie', 'Delta' ]
  console.log(fill(["Alpha", "Beta", "Charlie", "Delta", "Echo"], "Hotel", 1));
  // [ 'Alpha', 'Hotel', 'Hotel', 'Hotel', 'Hotel' ] 
  console.log(fill(["Alpha", "Beta", "Charlie", "Delta", "Echo", "Foxtrot"], "India"));
  // [ 'India', 'India', 'India', 'India', 'India', 'India' ]

  function fill(data, value, start, end) {
    // your code here
    if (!data || !value) {
      return 'Invalid Input';
    }
    if (!start) {
      start = 0;
    }
    if (!end || end > data.length) {
      end = data.length;
    }
    
    while (start < end) { // tukar end < start jadi start < end
      data[start] = value;
      start++;
    }
    return data;
  }

  function fill(data, value, start, end) {
    // your code here
    if (!data || !value) {
      return 'Invalid Input';
    }
    if (!start) {
      start = 0;
    }
    if (!end || end > data.length) {
      end = data.length;
    }
    for (let i = start; i < end; i++) { // ubah while jadi for loop
      data[i] = value;
      
    }
    return data;
  }