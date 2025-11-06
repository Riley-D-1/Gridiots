const canvas = document.getElementById("game_window");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.imageSmoothingEnabled = false;
let grid_people =[]
// 10 acros ways and 8 down
let game_array = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]

]

class grid_guy{
    constructor(team){
        this.team = team;
        
    }
    get_team(){
        return this.team
    }

}

class bot{
    constructor(){
        this.name = name_gen(1)
    }
    place(){
        // Info about reinforcements for char 
    }
    map(){
        // fetch map infomation
    }
}


function name_gen(num_of_names){
    // This one is done too
    // got a big ass list of random names and put some  fun ones in 
    const names = [
    "Liam", "Emma", "Noah", "Olivia", "Ava", "Elijah", "Sophia", "Lucas", "Isabella", "Mason",
    "Mia", "Ethan", "Charlotte", "Logan", "Amelia", "James", "Harper", "Benjamin", "Evelyn", "Jacob",
    "Abigail", "Michael", "Ella", "Alexander", "Scarlett", "Henry", "Grace", "Jackson", "Chloe", "Sebastian",
    "Luna", "Aiden", "Layla", "Matthew", "Aria", "Samuel", "Zoey", "David", "Nora", "Joseph",
    "Levi", "Hazel", "Owen", "Lily", "Wyatt", "Ellie", "John", "Aurora", "Daniel",
    "Gabriel", "Penelope", "Carter", "Victoria", "Jayden", "Hannah", "Luke", "Stella", "Anthony",
    "Isaac", "Savannah", "Grayson", "Brooklyn", "Julian", "Bella", "Lincoln", "Claire", "Nathan", "Skylar",
    "Christian", "Lucy", "Hunter", "Anna", "Connor", "Violet", "Aaron", "Charles", "Alice",
    // Weird but cool names
    "Blade", "Shadow", "Nova", "Onyx", "Echo", "Genesis"
    ];
    const shuffled = names.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num_of_names);
}

function place(x,y){
    // fetch x and y from mouse movements and then go 
}
function draw_grid(){
    // Split the canvas size up into grids that work with most sizes
    line_width = 10
    line_gap_x = 10
    line_gap_y = 10
    
}

function land_loss (){
    console.log()
}

function battle(){
    console.log()
}
function troop(){
    // Maybe add more in if scope allows
    let temp = 1

}

function reinforcements(){
    let reinforcements_ = []
    let reinforcements_rand = Math.floor(Math.random()*10)
    for(let i = 0;i< reinforcements_rand;i++)
        reinforcements_.push(grid_guy_());
}

function battling_screen(){
    // Anim or not, hides the logic like heads up holdem 
}


function draw_grid_guy(team){
    console.log()
}

// Main function
function main(){
    draw_grid()
    draw_grid_guy()
}
