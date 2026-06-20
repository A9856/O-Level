function pageLoad()
{
    alert("Welcome To Our Website");
}

// function pageUnload()
// {
//     console.log("User Left The Website");
// }

window.onbeforeunload = function ()
{
    return "Are you sure you want to leave this page?";
};

function showMessage()
{
    alert("Thanks For Visiting");
}