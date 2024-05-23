/**To add the effect to other li of the side bar menu */
var allItems = document.querySelectorAll('#sidebar .side-menu.top li a');

allItems.forEach(item => {
    
    item.addEventListener('click', () => {
        
        allItems.forEach(i=>{
            i.parentElement.classList.remove('active');
        })
        item.parentElement.classList.add('active');

    });
});

/**To slide the sidebar when the icon menu has been*/
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function(){
    sidebar.classList.toggle('hide');
})



//The script to show the search bar when i click the search button

const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx')
const searchForm = document.querySelector('#content nav form');
searchButton.addEventListener('click', (e) => {


    if(window.innerWidth < 576)
    {
        e.preventDefault();
        searchForm.classList.toggle('show');
        if(searchForm.classList.contains('show'))
        {
            searchButtonIcon.classList.replace('bx-search', 'bx-x-circle');
        }else
        {
            searchButtonIcon.classList.replace('bx-x-circle', 'bx-search');            
        }
    }

});

//When the class show is toggled, and i resize the window to the right that means greather than 576, the X icon will desappear and the search icon will show up again
window.addEventListener('resize', () =>{
    if (window.innerWidth > 576) {
        searchButtonIcon.classList.replace('bx-x-circle', 'bx-search');
        searchForm.classList.remove('show');
    }
// The script to slide the sidebar to left when the width of the window is smaller than 768px
    if(window.innerWidth < 768)
    {
        sidebar.classList.add('hide');
    }
})

const downloadButton = querySelector('#content main .head-title .button-download a');

downloadButton.addEventListener('click', (e) =>{
    e.preventDefault();
})

