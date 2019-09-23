//Tried with swal
swal({
  title: "Are you sure?",
  text: "You come across a strange house in the woods. Do you want to go in?",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((goin) => {
  if (goin) {
    swal("You decided to Enter to house and find a three packs of beer", {
      icon: "success",
    });
  } else {
    swal("You are to afraid to enter, so you went back home and cry!");
  }
});