const canvas = document.getElementById("game_window");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.imageSmoothingEnabled = false;
let grid_people = []
// 16 acros ways and 8 down
let game_array = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]

class player{
    constructor(){
    }
    map(){
        // Split by half 
    }
}

class user extends player{
    constructor(name){
        super();
        this.name = name
    }
    name_(){
        return this.name
    }
}

class bot extends player{
    constructor(){
        super();
        this.name = name_gen(1)
    }
    place(){
            function place(value = 1) {
        // pick a random row (0–7)
        let row = Math.floor(Math.random() * game_array.length);

        // pick a random column only in his half (0–7)
        let col = Math.floor(Math.random() * (game_array[row].length / 2));

        // place the value
        game_array[row][col] = value;

        return [row, col]; // return coordinates
    }
        }
    name_(){
        return this.name
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

function place(x,y,team){
    // First is currently 16 the other is 8
    let cell_width = canvas.width / 16;
    let cell_height = canvas.height / 8;
    // Divide the screen into chunks and specify where it should go
    // Top left corner of that cell fyi
    let col = Math.floor(x / cell_width);
    let row = Math.floor(y / cell_height);
    let cell_x = col * cell_width;
    let cell_y = row * cell_height;
    draw_grid_guy(cell_x,cell_y,team)
}

function change_array(column,row,value){
    game_array[row][column] = value;
}


function draw_grid(map_type){
    if (map_type === "standard"){
        // Light greeen
        ctx.fillStyle = "#7b9b30ff"
    }else if (map_type === "ocean"){
            ctx.fillStyle = "#0A1A3F"
    }else if (map_type === "desert"){
        // Pick a desert colour 
        ctx.fillStyle = "#ebce77ff";
    } else if (map_type === "void"){
        // Pick black colour
        ctx.fillStyle ="#000000ff"
    } else if (map_type === "forrest"){
        ctx.fillStyle = "#2E7D32";
    }else{
        console.log("Error in selecting ")
        ctx.fillStyle = "#7b9b30ff"
    }

    // Deep Green
    //  Sandy green (olive kinda)

    // Deep vibrant green

    ctx.fillRect(0, 0, canvas.width, canvas.height); 

    // Grid Part
    // This is the verticall lines
    // Column height is specified in below if statement its currently (16)
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#ffffff"
    for (let i = 0; i <= 15; i++) {
        ctx.beginPath();
        ctx.moveTo(i * canvas.width /16, 0);
        ctx.lineTo(i * canvas.width /16, canvas.height - canvas.height / 8);
        ctx.stroke();
    }

    for (let j = 0; j <= 8; j++) {
        ctx.beginPath();
        ctx.moveTo(0, j * canvas.height / 8);
        ctx.lineTo(canvas.width, j * canvas.height / 8);
        ctx.stroke();
    }
}


function land_loss (){
    game_array.forEach(grid_spot => {
        //if grid_spot = []
    });

}

function Start_Screen(user,enemy){
    let start_screen_bg = '#00e1ffff'
    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = start_screen_bg
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = "#ffffff"
        ctx.font = "bold 48px Pixelify Sans";
        ctx.textAlign = "center";
        ctx.fillText("Gridiots!", canvas.width / 2, canvas.height / 2)
    }, 2100);
    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = start_screen_bg
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = "#ffffff"
        ctx.font = "bold 48px Pixelify Sans";
        ctx.textAlign = "center";
        ctx.fillStyle = "#2979FF"
        ctx.fillText(`${user.name_()}`, canvas.width / 2, (canvas.height / 2) - (canvas.height/6))
        ctx.fillStyle = "#ffffff"
        ctx.fillText("VS", canvas.width / 2, (canvas.height / 2) )
        ctx.fillStyle =" #FF1744";
        ctx.fillText(`${enemy.name_()}`, canvas.width / 2, (canvas.height / 2) + (canvas.height/6))
    }, 4200);
}

function battle(user,enemy){
    // Battle Calculations before the screen is shown
    /*
    temp_battle_calc = Math.floor(Math.random()*10)
    for(let i; i<temp_battle_calc;i++){
        miracle_save_chance= Math.floor(Math.random()*10) 
        if (miracle_save_chance > 8){
            user.remove_random()
        }else if (miracle_save_chance < 2){
            enemy.remove_random()
        }else{
            enemy.remove_random()
            user.remove_random()
        }
    }
    */
    // The classic ... loading screen for this 
    /*
    setTimeout(() => {
        bg_colour = '#00e1ffff'
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = bg_colour
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = "#ffffff"

    */
    ctx.font = "bold 48px Pixelify Sans";
    ctx.textAlign = "center";
    bg_colour = '#00e1ffff'
    for (let i = 0; i <= 3; i++) {
        setTimeout(() => {
            // janky joining thing based on count of i
            let dots = ".".repeat(i)
            let message = `Fighting${dots}`
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = bg_colour;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#ffffff";
            ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }, 600 * i); // stagger each iteration
    }
}

function troop(){
    // Maybe add more in if scope allows
    
}

function reinforcements(user,bot){
    // Need to add in an overlay of items
    troop_types = ["standard"]
    // Maybe add more in if scope allows
    let reinforcements_ = []
    let reinforcements_rand = Math.floor(Math.random()*10)
    for(let i = 0;i< reinforcements_rand;i++ ){
        reinforcements_.push(grid_guy_());
        console.log(reinforcements_)
        bot.add_reinfocements()
    }
}
// Changed mind will combine functions

function trace_known_grids(){
    ctx.lineWidth = 2;
    width_rect = canvas.width/16
    height_rect = canvas.height/8
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            let cell_val = game[row][col];
            if (cell_val = "blue"){
                ctx.strokeStyle = "#2979FF"
            }else if (cell_val = "red"){
            ctx.strokeStyle =" #FF1744"; 
            }
            else if(cell_val = "no_mans_land"){
                ctx.strokeStyle ="#7A7A7A";
                ctx.strokeRect(col * width_rect,row * height_rect,width_rect,height_rect);
            }else{
                // DO nothing
            }
        }
    }
    // Blue team
    // No mans land

    // Not placed colour
    // The red team outline 

    // Need to caculate what values will change, will rely upon code simlar to map by splitting the same way.
}

function draw_grid_guy(x,y,team){
    if (team = "red"){
        const img = new Image()
        img.src = '../images/right.png';
        img.onload = function(){
            ctx.drawImage(img,0,0,x,y)
        }
    }else if (team = "blue"){
        const img = new Image()
        img.src = '../images/left.png';
        img.onload = function(){
            ctx.drawImage(img,0,0,x,y)
        }
    }
}

function update_user_info(message){
    const myElement = document.getElementById("round_info");
    myElement.textContent = message;
}

// Main function
function main(){
    // Fetch info from input page
    let location = localStorage.getItem("selected_map");
    // Check if there is anything. 
    if (!location) {
        console.log("No map selected, defaulting to standard");
        location = "standard";
    }
    // Set all of the infomation
    stage = "start"
    let user_ = new user("You")
    let enemy_ = new bot()
    //let running = true
    Start_Screen(user_, enemy_, () => {
        stage = "place"; 
        console.log("Start completed")
    });
    setInterval(() => {
        if (stage === "place"){
            update_user_info("Reinforcements arriving")
            draw_grid(location) 
            trace_known_grids()
            reinforcements(user_,enemy_)       
            update_user_info("Reinforcements arriving")
            update_user_info("Place your troops")
            document.addEventListener("click", function(event) {
                // debuging statement
                console.log(`X = ${event.clientX} ,  Y = ${event.clientY}`);
                place(event.clientX,event.clientY,"blue")
            }), 
            trace_known_grids()

            //
        } else if (stage === "reinforcements"){ 
            // The reinforcements stage is the arrival of troops in hotbar
            // to place and directly triggers the next stage (placing)
        } else if (stage === "start"){
            // No action
        } else if (stage === "fighting"){
            stage = battle(user_,enemy_)
        }else if (stage === "scoring"){
            window.location.href = "/index.html";

        }else{
            alert("Something has gone wrong, please reload and try again.");
        }
    }, 4100);
}


/*
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
*/

//main()
battle("nah","egg")