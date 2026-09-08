// opacity.toFixed(2)  to repair angular-carousel.js 
var myapp = angular.module('RosApp', ['angular-carousel', 'ngAnimate']);
myapp.controller('DemoCtrl', function($scope) {
  $scope.carouselIndex3 = 0;
  $scope.slides3 = [{
    'img': 'img/gallery_sm_1.jpg',
    'caption': 'Simply Elegant',
    'details': 'We offer Simple and Elegant textures for those that like poise and sophistication.'
  }, {
    'img': 'img/gallery_sm_2.jpg',
    'caption': 'For the People',
    'details': 'We help those who cant help themselves. With zero chance of being infected by any of a million different diseases. How could yo go wrong'
  }, {
    'img': 'img/gallery_sm_3.jpg',
    'caption': 'Total Domination',
    'details': 'Total domination of the forces of nature at a low cost and energy efficient package.'
  }];
  $scope.loadNextImages = function() {
    if (slideImages[slideImages.length - 1].id !== $scope.slides3[$scope.slides3.length - 1].id) {
      $scope.slides3 = [];
      $scope.carouselIndex3 = 0;
      ++$scope.galleryNumber;
      addImages($scope.slides3, $scope.setOfImagesToShow);
    } else {
      $scope.galleryNumber = 1;
      $scope.slides3 = [];
      $scope.carouselIndex3 = 0;
      addImages($scope.slides3, $scope.setOfImagesToShow);
    }
  }
  $scope.loadPreviousImages = function() {
    if (slideImages[0].id !== $scope.slides3[0].id) {
      $scope.slides3 = [];
      $scope.carouselIndex3 = 0;
      --$scope.galleryNumber;
      addImages($scope.slides3, $scope.setOfImagesToShow);
    } else {
      $scope.galleryNumber = slideImages.length / $scope.setOfImagesToShow;
      $scope.slides3 = [];
      $scope.carouselIndex3 = 0;
      addImages($scope.slides3, $scope.setOfImagesToShow);
    }
  }
})