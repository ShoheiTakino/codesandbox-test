// let val1 = "let変数"
// console.log(val1)

// //let上書き可能

// val1 = "let変数を上書き"
// console.log(val1)

// const val3 = "const変数";
// console.log(val3)
// val3= "const変数を上書き"

//constで定義したオブジェクトはプロパティの変更が可能
// const cal4 = {
//   name: "shohei",
//   age: 24
// };
// cal4.name = "shohiiiiiii";
// cal4.address = "Habikino";
// console.log(cal4)

//constで定義したオブジェクトはプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0]="bird";
// val5.push('monkey');
// console.log(val5)

/* テンプレート文字列*/
// const name = "shohi";
// const age = 24;

// //従来の記法
// // const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// // console.log(message1);

// // //テンプレート文字列を用いた方法
// // const message2 = `私の名前は${name}です。年齢は${age}`;

// /*アロー関数*/
// //従来
// // function func1(str) {
// //   return str;
// // }
// // const func1 = function(str){
// //   return str;
// // }
// // console.log(func1("func1です"));
// // //アロー関数
// // const func2 = (str)=> {
// //   return str;
// // }
// // console.log(func2("func2です"))

// // const func3 = (num1, num2) => {
// //   return num1 + num2 ;
// // };
// // console.log(func3(10,20))

// /*分割代入*/
// const myProfile = {
//   name: "shohi",
//   age: 24
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);
// const myProfile = ['sho',24];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);
// const [name,age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

//デフォルト値
// const sayHello = (name= 'ゲスト') => console.log(`こんにちは！${name}さん！`)
// sayHello()

//スプレッド構文...
//配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1); //「...」は配列の値を順番にh処理してくれる。

// const sumFunc = (num1, num2) => console.log(num1+num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);//順番に処理する。

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10,20];
// const arr5 = [30,40];

//  const arr6 = [...arr4];
//  arr6[0]=100;
//  console.log(arr6);
//  console.log(arr4)

// const arr7 = [...arr4, ...arr5];
// console.log(arr7)

// const arr8 = arr4; //イコールで配列コピーすると、元の変数も後に代入したものに書き換えられる。参照渡し
// console.log(arr8);
// arr8[0]= 100;
// console.log(arr8)

//mapやfiltterを使った配列の処理
// const nameArr = ["田中", "山田", "shohi"];
// for (let index = 0; index< nameArr.length; index++ ) {
//   console.log(`${index+1}番は${nameArr[index]}`)
// };

//map構文
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index+1}は${name}です`));

//fillterある条件に適したものを取り出すことができる。
// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num%2 === 1;
// })
// console.log(newNumArr)

// const newNameArr = nameArr.map((name)=>{
//   if (name==="shohi"){
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr)

//三項演算子
//ある条件？　条件がtrueの時：条件がfalseの時
// const val1 = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val1)

// const num = '1300';
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を設定してください。'
// console.log(formattedNum)

// const chackSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許与範囲です。";
// };
// console.log(chackSum(50, 100));

//論理演算子の本当の意味を知ろう
// const flag1 = true
// const flag2 = false
// if (flag1||flag2) {
//   console.log('1も2もtrueになります。')
// }
// if (flag1 && flag2) {
//   console.log('1も2もtrueになります。')
// }

// ||は左がわがfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定";
// console.log(fee)

//&& は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2)
