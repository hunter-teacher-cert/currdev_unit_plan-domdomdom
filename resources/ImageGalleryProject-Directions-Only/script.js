/** List that stores URLs or images. **/

//TODO Change these to contain URLs of images you want to display
var images = ["https://c402277.ssl.cf1.rackcdn.com/photos/18315/images/hero_small/Medium_WW230176.jpg?1576168323",
             "https://i.pinimg.com/originals/e0/3d/5b/e03d5b812b2734826f76960eca5b5541.jpg",
             "https://lp-cms-production.imgix.net/features/2019/06/panda-d55d15231c4f.jpg?auto=compress&fit=crop&fm=auto&sharp=10&vib=20&w=1200",
             "https://media4.s-nbcnews.com/j/newscms/2016_36/1685951/ss-160826-twip-05_8cf6d4cb83758449fd400c7c3d71aa1f.fit-760w.jpg"];

/** Function that accepts parameters imageURL, width and height of the image to display, and
creates a DOM element to represent the image 
@param imageURL the URL of the image to display
@param width the width that will be shown for the image HTML element
@param height the height that will be shown for the image HTML element
@return a DOM element created to represent the image to be displayed
*/
var createImage = function(imageUrl, width, height)
{
  //TODO use document.createElement to create an img DOM element, and store it in a variable

  
  //TODO set the src, width, and height properties of your your element variable to be their respective parameters




  
  //TODO return the image element you created. Check line 19 for the variable name

}

/** Loop through the images array and display a thumbnail of each image **/
var loadThumbnails = function()
{
  //TODO get the element with ID "thumbnails" and store it in a variable

  
  //TODO loop through the images array


      //TODO call the createImage function and store its result in a variable,
      //passing in parameters the current element of the image array, 100, 100

      
      //TODO call appendChild() on the variable that represents your thumbnails DIV

    
}

/** Display the image from the image array at position index
@param index the position of the image to display **/
var loadImage = function(index)
{
  //TODO write an if statement to make sure the index is a valid index for the images array 


      //TODO if the index is valid, call createImage() with parameters images[index], 400, 400, store the result in a variable
      



      //TODO call document.getElementById with parameter id "current-image" which is the div placeholder for the current
      //image displayed, store it in a variable


      //TODO reset the innerHTML of the placeholder div to ""


      //TODO call appendChild to add the image to the div



      //TODO else - the index is not valid - display and error message

}

/** Variable currentImage keeps track of the index of the image currently displayed.
Start by displaying the first image in the array **/
var currentImage = 0;

/** function nextImage() increments the currentImage variable and loads the image onto the page **/
var nextImage = function()
{
  /* increment (increase by 1) the currentImage variable */
  currentImage++;
  
  /* call loadImage with parameter currentImage */
  loadImage(currentImage);
}

/** function previousImage() decrements the currentImage variable and loads the image onto the page **/
var previousImage = function()
{
  //TODO decrement (decrease by 1) the currentImage variable

  
  //TODO call loadImage with parameter currentImage

}

/** Call loadThumbnails() **/
loadThumbnails();

/** Call loadImage(currentImage) to display the initial image **/
loadImage(currentImage);

/** add event listener to the "previous" buttons **/
document.getElementById("previous").addEventListener('click', previousImage);

//TODO add event listener to the "next" buttons
