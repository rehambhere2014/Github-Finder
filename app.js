//search input
let github = new Github();
let ui = new UI();
const searchUser = document.getElementById('searchUser');

//search input event 
searchUser.addEventListener('keyup', (e) => {
    const userTeaxt = e.target.value;
    if (userTeaxt !== '') {
        github.getUser(userTeaxt).then(res => {
            console.log(res.profile.message)
            if (res.profile.message === 'Not Found') {
                //show alert profile
                ui.showAlert('User not found', 'alert alert-danger')
            } else {

                //show data
                ui.showProfile(res.profile);
                ui.showRepos(res.repo)

            }
        })
    } else {
        // Clear profile
        ui.clearProfile()

    }
})