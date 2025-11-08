const canvas = document.getElementById("game_window");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.imageSmoothingEnabled = false;
let grid_people = []
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

class player{
    constructor(){
    }
    map(){
        // fetch map infomation 
        // not working but need to split each array inside the game array of arrray 
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            print(element)
        }   
    }
}

class user extends player{
    constructor(name){
        this.name = name
    }
}

class bot extends player{
    constructor(){
        this.name = name_gen(1)
    }
    place(){
        //random.choice(My_grid())
        // Info about reinforcements for char 
    }
    map(){
        // fetch map infomation
    }
}

// Reappearance of this function lol
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
    // Divide the screen into chunks and specify where it should go
}

function draw_grid(map_type){
    if (map_type === "standard"){
        // Light greeen
        ctx.fillStyle = "#7CB342"
    }else if (map_type === "blueprint"){
            // Pick a blueprint style colour
    }else if (map_type === "desert"){
        // Pick a desert colour 
    } else if (map_type === "void"){
        // Pick black colour
    } else if (map_type === "forrest"){
        // Forrest
    }
    // Deep Green
    //tx.fillStyle ="#4CAF50";
    //  Sandy green (olive kinda)
    ctx.fillStyle = "#8E9A3E";
    // Deep vibrant green
    //ctx.fillStyle = "#2E7D32";
    ctx.fillRect(0, 0, canvas.width, canvas.height); 
    // Split the canvas size up into grids that work with most sizes
    line_width = 10
    line_gap_x = 10
    line_gap_y = 10
    ctx.beginPath()
    ctx.moveTo(50, 50)
    ctx.lineTo(200, 100);
    // The red team outline
    ctx.strokeStyle =" #FF1744";
    // Blue team
    ctx.strokeStyle = "#2979FF"
    // No mans land
    ctx.strokeStyle ="#7A7A7A";
    // Not placed colour
    ctx.strokeStyle = "#ffffff"
    ctx.lineWidth = 2; 
    ctx.stroke();
}

function land_loss (){
    console.log()
    game_array.forEach(grid_spot => {
        //if grid_spot = []
    });
    // Need to caculate what values will change, will rely upon code simlar to map by splitting the same way.
    
}

function battle(user,enemy,who){
    console.log()
    temp_battle_calc = Math.floor(Math.random()*10)
    if (who = "bot"){
        for(let i; i<temp_battle_calc;i++){
            temp_battle_calc = Math.floor(Math.random()*10) 
            }
        }
}

function troop(){
    // Maybe add more in if scope allows
    let temp = 1
    
}

function reinforcements(user,bo){
    let reinforcements_ = []
    let reinforcements_rand = Math.floor(Math.random()*10)
    for(let i = 0;i< reinforcements_rand;i++)
        reinforcements_.push(grid_guy_());
    bot.add_reinfocements
}

function battling_screen(){
    // Anim or not, hides the logic like heads up holdem 
    batte
}


function draw_grid_guy(x,y,team){
    if (team == "red"){
        console.log("red")
        // Draw red team 
    }else if (team == "blue"){
        // Draw blue team  
    }else{
        // Draw grave/ no mans lands grid icon
    }
    
}

function update_user_info(){
    console.log()
}

// Main function
function main(){
    draw_grid()
    i = 0
    game_array.forEach(element => {
        // Temp filler needs to be changed
        let x = 0
        let y = 0
        if (element == "p"){ // Blue standard guy
            console.log("Default grid guy")
            draw_grid_guy(x,y)
            i+=1
        }else if (element == "o") // Red Standard Guy
            console.log("red guy")
        // Can expand if scope allows multiple types of troops
    });
}

draw_grid()