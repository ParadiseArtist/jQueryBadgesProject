$(function() {

  // your code will go here
  $.ajax({
      url: 'https://www.codeschool.com/users/ParadiseArtist.json',
      dataType: 'jsonp',
      success: function(response) {
        addCourses(response.courses.completed);
        console.log(response.courses.completed);

      }
    });

    function addCourses(courses){
      courses.forEach(function(course){
        var $course = $('<div></div>', {
          'class': 'course'
        }).appendTo('#badges')

        $course.append($('<h3></h3>', {
          text: course.title
        })).append($('<img />', {
          src: course.badge
        })).append($('<a />', {
          'class': 'btn btn-primary',
          target: '_blank',
          href: course.url,
          text: 'See Course'
        }))

      })

      }

});
