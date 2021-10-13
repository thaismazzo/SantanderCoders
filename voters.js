var voters = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false }
  ];

let analyseVoters = (array_voters) => {
    let array_young = array_voters.filter(element => element.age >18 && element.age <=25)
    let array_mid = array_voters.filter(element => element.age >=26 && element.age <=35)
    let array_old = array_voters.filter(element => element.age >=36 && element.age <=55) 
    let numYoungVotes = 0;
    let numMidVotes = 0;
    let numOldVotes = 0;
    let youngVoters = array_young.length;
    let midVoters = array_mid.length;
    let OldVoters = array_old.length;

    for (let i in array_young){
    if (array_young[i].voted ===true){numYoungVotes = numYoungVotes + 1}}

    for (let i in array_mid){
    if (array_mid[i].voted ===true){numMidVotes = numMidVotes + 1}}

    for (let i in array_old){
    if (array_old[i].voted ===true){numOldVotes = numOldVotes + 1}}

    return {'numYoungVotes': numYoungVotes, 'youngVoters': youngVoters,'numMidVotes':numMidVotes,'midVoters':midVoters,'numOldVotes':numOldVotes,'OldVoters':OldVoters}}