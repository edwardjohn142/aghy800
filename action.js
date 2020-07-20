
$('.tab-li').on("click", function(e){
    $('.tab-li').removeClass('active');    
    $(this).addClass('active');
    $('.tab-content').removeClass('active');
    $($(this).attr('data-target')).addClass('active');
});
function openModal(id) {
    MicroModal.show(id);
  }


$('tr').click(function(){
    MicroModal.show('modal-1');
  });



