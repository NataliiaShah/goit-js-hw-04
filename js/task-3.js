const profile = {
    username: "Jacob",
    playTime: 300,

    changeUsername(newName) {
        profile.username = newName;
    },
    updatePlayTime(hours) {
        let amount = hours * profile.playTime;
    },
    getInfo() {
        return `${username} has ${amount} active hours!`
    },
}



console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"