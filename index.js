function newImage(url, left, bottom){
let gameAssets = document.createElement('img')
gameAssets.src = url
gameAssets.style.position = 'fixed'
gameAssets.style.left = left + 'px'
gameAssets.style.bottom = bottom + 'px'
document.body.append(gameAssets)
return gameAssets
}

// Define a function named newItem that creates an item as shown above. Then, use it to create a sword item. 
function newItem(url, left, bottom){
let gameAssets = newImage(url, left, bottom)

gameAssets.addEventListener('dblclick', function(){
    gameAssets.remove()
})
}

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/pillar.png', 350, 100)
newImage('assets/tree.png', 200, 300)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)
