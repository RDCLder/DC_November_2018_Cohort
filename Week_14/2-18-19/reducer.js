// // // // // var state = {
// // // // //     clicks: 0,
// // // // //     count: 0
// // // // // }

// // // // // console.log(state);

// // // // // var newState = {
// // // // //     ...state,
// // // // //     clicks: state.clicks + 1,
// // // // //     count: state.count + 1
// // // // // }

// // // // // console.log(newState);

// // // // var state = {
// // // //     house: {
// // // //         name: "Ravenclaw",
// // // //         points: 17
// // // //     }
// // // // }

// // // // console.log(state);

// // // // var newState = {
// // // //     ...newState,
// // // //     house: {
// // // //         ...state.house,
// // // //         points: state.house.points + 5
// // // //     }
// // // // }

// // // // console.log(newState);

// // // var state = {
// // //     school: "Hogwarts",
// // //     houses: {
// // //         ravenclaw: {points: 17},
// // //         Gryffindor: {points: 5}
// // //     }
// // // }

// // // var newState = {
// // //     ...state,
// // //     houses: {
// // //         ...state.houses,
// // //         Gryffindor:  {
// // //             ...state.houses.Gryffindor,
// // //             points: state.houses.Gryffindor.points + 150
// // //         }
// // //     }
// // // }

// // // console.log(state);
// // // console.log(newState);

// // var state = [3, 4, 5, 6];
// // var newItem = 1;
// // var newState = [
// //     newItem,
// //     ...state
// // ];

// // console.log(newState);

// var state = [1, 2, "X", 4];

// var newState = state.map((item, index) => {
//     if (item === "X") {
//         return 3;
//     }
//     return item;
// })

var arr1 = [1, 2, 3, 5, 6];
var arr2 = [
    ...arr1.slice(0, 2),
    4,
    ...arr1.slice(2)
];
console.log(arr2);