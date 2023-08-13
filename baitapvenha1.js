// 1/Cho một mảng các chuỗi, viết chương trình trả về mảng mới chứa các chuỗi có độ dài lớn nhất.

// Ví dụ: INPUT là [“BINH”, “HUNG”, “PHUOC”, “CAO”, “KHANH”] thì 
// OUTPUT return là [“PHUOC”, “KHANH”]
// [JavaScript] Syntax Tips
// Prints help message to the console
// Returns a string
function allLongestStrings(inputArray) {
   let maxlength = 0;
   const newArray = [];
   for(let i = 0; i < inputArray.length; i++){
    if(inputArray[i].length > maxlength){
        maxlength = inputArray[i].length;
        newArray.length = 0;
    }
    if(inputArray[i].length === maxlength){
        newArray.push(inputArray[i])
    }
   }
  
    return newArray;
  }
  
  const input1 = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"];
  const output1 = allLongestStrings(input1);
  console.log(output1);

//   2/Có một nhóm người đang đứng thành một hàng, để chia ra làm 2 đội từ hàng người thì quản trò chia như sao. Người đứng thứ nhất vào Team 1, người đúng thứ hai vào Team 2, người đứng thứ ba vào lại Team 1, cứ tiếp tục như thế cho đến người cuối cùng.
// Viết chương trình có đầu vào là một mảng chưa cân nặng của tất cả mọi người theo thứ tự hàng ban đầu và yêu cầu trả về mảng chưa tổng cân nặng của 2 team.

// Ví dụ: INPUT [60, 40, 55, 75, 64] thì OUTPUT là [179, 115]
// [JavaScript] Syntax Tips
// Prints help message to the console
// Returns a string
function alternatingSums(a) {
    let sum1 = 0;
    let sum2 = 0;
    const arr3 = [];
    for (let i = 0; i < a.length; i++) {
      if (i % 2 === 0) {
        sum1 += a[i]; 
        
      } else {
        sum2 += a[i]; 
      }
     
    }
    
    return [sum1, sum2]; 
}
const input2 = [60, 40, 55, 75, 64];
const output2 = alternatingSums(input2);
console.log(output2)
// bài tập 3/
// viết hàm đếm số lần xuất hiện của các kí tự
// VD: Input : "aaabbccbacccaab" ,OUTPUT:{a:6,b:4,c:5}
function countCharacter(b) {
  const countCh = {}; 
  for (let i = 0; i < b.length; i++) {
    const character = b[i];
    if (countCh[character]) {
       countCh[character] += 1;
    } else {   
      countCh[character] = 1;
    }
  }
  
  return countCh;
}

const input3 = "aaabbccbacccaab";
const output3 = countCharacter(input3);
console.log( output3);
