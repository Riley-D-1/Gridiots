const canvas = document.getElementById("game_window");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.imageSmoothingEnabled = false;
let grid_people = []
let round_counter = 0
let user_reinforcements = 0;
let enemy_reinforcements = 0;
// 16 acros ways and 8 down

let game_array = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]

class player{
    constructor(name){
        this.name = name
        this.troops_pos = []; // store troop positions
    }
    name_(){
        return this.name
    }
    add_troop(row, col) {
        this.troops_pos.push({ row, col });
        game_array[row][col] = "b"; 
    }
    remove_random() {
        if (this.troops_pos.length === 0) return; // nothing to remove
        let index = Math.floor(Math.random() * this.troops_pos.length);
        let pos = this.troops_pos[index];
        this.troops_pos.splice(index, 1);
        game_array[pos.row][pos.col] = 0;
    }

}
class bot {
    constructor(){
        this.name = name_gen(1);
        this.troops_pos = [];
    }
    bot_place(enemy_reinforcements){
        for (let i = 0; i < enemy_reinforcements; i++) {
            let row = Math.floor(Math.random() * game_array.length);
            let col = Math.floor(Math.random() * game_array[row].length)
            if (game_array[row][col] === 0) {
                this.add_troop(row, col);
            } else {
                i--
            }
        }
        stage = "fighting"
    }
    add_troop(row, col) {
        this.troops_pos.push({ row, col });
        game_array[row][col] = "r"; 
    }remove_random() {
        if (this.troops_pos.length === 0) return; // nothing to remove
        let index = Math.floor(Math.random() * this.troops_pos.length);
        let pos = this.troops_pos[index];
        this.troops_pos.splice(index, 1);
        game_array[pos.row][pos.col] = 0;
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

function place(x,y){
    // First is currently 16 the other is 8
    let cell_width = canvas.width / 16;
    let cell_height = canvas.height / 8;
    // Divide the screen into chunks and specify where it should go
    // Top left corner of that cell fyi
    let col = Math.floor(x / cell_width);
    let row = Math.floor(y / cell_height);
    game_array[row][col] = "b";
    let cell_x = col * cell_width;
    let cell_y = row * cell_height;
    user_.add_troop(row, col);
    draw_grid_guy(cell_x,cell_y)

}

function change_array(column,row,value){
    game_array[row][column] = value;
}

function draw_grid(map_type){
    if (map_type === "standard"){
        // picks a Light greeen colour
        ctx.fillStyle = "#7b9b30ff"
    }else if (map_type === "ocean"){
        // picks a blue colour
        ctx.fillStyle = "#0A1A3F"
    }else if (map_type === "desert"){
        // Picks a desert colour 
        ctx.fillStyle = "#ebce77ff";
    } else if (map_type === "void"){
        // Picks a black colour
        ctx.fillStyle ="#000000ff"
    } else if (map_type === "forrest"){
        ctx.fillStyle = "#2E7D32";
    }else{
        ctx.fillStyle = "#7b9b30ff"
    }
    ctx.fillRect(0, 0, canvas.width, canvas.height); 
    // Grid Part
    // This is the vertical lines
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
    // Draw existing troops
    for(let row = 0; row < game_array.length; row++ ){
        for(let col = 0; col<game_array[row].length;col++){
            let element = game_array[row][col]
            // Temp filler needs to be changed
            if (element == "b"){ // Blue standard guy
                draw_grid_guy((col*canvas.width / 16),(row*canvas.height / 8),"blue")
            }else if (element == "r") // Red Standard Guy
                draw_grid_guy((col*canvas.width / 16),(row*canvas.height / 8),"red")
            else{
                // Nothing happens of note
            }
        }
    }
}

function start_button(){
    const round_info_ = document.getElementById("round_info");
    round_info_.style.display = "none";
    let start_screen_bg = '#00e1ffff'
    document.fonts.load('bold 48px "Pixelify Sans"').then(function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = start_screen_bg
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = "#ffffff"
        ctx.font = "bold 65px Pixelify Sans";
        ctx.textAlign = "center";
        ctx.fillText("Gridiots!", canvas.width / 2, canvas.height / 2)
    }, 100);

}

function Start_Screen(user,enemy){
    let start_screen_bg = '#00e1ffff'
    document.fonts.load('bold 48px "Pixelify Sans"').then(function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = start_screen_bg
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = "#ffffff"
        ctx.font = "bold 48px Pixelify Sans";
        ctx.textAlign = "center";
        ctx.fillText("Gridiots!", canvas.width / 2, canvas.height / 2)
    }, 100);
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
    }, 3200);
    setTimeout(() => {
        console.log("Changed to game.")
        stage = "place"
        place_stage(location);
    },8000)
}

function friends_bonus(team){
    for (let r = 0; r < game_array.length; r++) {
        for (let c = 0; c < game_array[r].length; c++) {
            // AI helped with this if statement cause this statement would have been 10 hours of debugging lol
            if (game_array[r][c] === team || r > 0 && game_array[r-1][c] === team || r < game_array.length-1 && game_array[r+1][c] === team || c > 0 && game_array[r][c-1] === team || c < game_array[r].length-1 && game_array[r][c+1] === team){
                return 2;
            }
        }
    }
    return 0;
}

function battle_stats(user, enemy) {
    let temp_battle_calc = Math.floor(Math.random() * 10);
    for (let i = 0; i < temp_battle_calc; i++) {
        let user_roll = Math.floor(Math.random() * 10) + friends_bonus("b");
        let enemy_roll = Math.floor(Math.random() * 10) + friends_bonus("r");
        if (user_roll > 8 && enemy_roll > 8) {
            // both lucky
        } else if (user_roll > 8) {
            enemy.remove_random();
        } else if (enemy_roll > 8) {
            user.remove_random();
        } else {
            user.remove_random();
            enemy.remove_random();
        }
    }
}

function battle(user, enemy) {
    const round_info = document.getElementById("round_info");
    if (round_info) {
        round_info.style.display = "none";
    }
    ctx.font = "bold 48px Pixelify Sans";
    ctx.textAlign = "center";
    let bg_colour = '#00e1ffff'
    let dots = 0;
    let direction = 1;

    let loading_loop = setInterval(() => {
        if (dots === 3) {
            direction = -1;
        } else if (dots === 0) {
            direction = 1;
        }
        dots += direction;

        let dots_ = ".".repeat(dots);
        let message = `Fighting${dots_}`;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = bg_colour;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#ffffff";
        ctx.fillText(message, canvas.width / 2, canvas.height / 2);
    }, 600);
    setTimeout(() => {
        clearInterval(loading_loop);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = bg_colour;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#ffffff";
        ctx.fillText("Battle Complete!", canvas.width / 2, canvas.height / 2);
        setTimeout(() => {
            battle_stats(user, enemy);
            round_counter++
            battle_in_progress = false
            if (round_counter >= 5) {
                stage = "scoring";
            } else {
                stage = "place";
            }
        }, 1000);
    }, 5000);
}

function trace_known_grids(){
    console.log("Tracing grid")
    ctx.lineWidth = 2;
    width_rect = canvas.width/16
    height_rect = canvas.height/8
    for (let row = 0; row < game_array.length; row++) {
        for (let col = 0; col < game_array[row].length; col++) {
            let cell_val = game_array[row][col];
            if (cell_val === "b"){
                ctx.strokeStyle = "#2979FF"
                ctx.strokeRect(col * width_rect,row * height_rect,width_rect,height_rect);
            }else if (cell_val === "r"){
                ctx.strokeStyle =" #FF1744"; 
                ctx.strokeRect(col * width_rect,row * height_rect,width_rect,height_rect);
            }else{
                // DO nothing
            }
        }
    }
}

function draw_grid_guy(x,y){
    const img = new Image()
    img.src = '../images/gridiot.png';
    img.onload = function() {
        let cellWidth = canvas.width / 16;
        let cellHeight = canvas.height / 8;
        ctx.drawImage(img, x, y, cellWidth, cellHeight);
    };
}

function update_user_info(message){
    const myElement = document.getElementById("round_info");
    myElement.textContent = message;
}

function place_stage(){
    const round_info = document.getElementById("round_info");
    round_info.style.display = "";
    draw_grid(location);
    update_user_info("Reinforcements arriving...");
    user_reinforcements = Math.floor(Math.random() * 10+1);
    enemy_reinforcements = Math.floor(Math.random() * 10+1);
    setTimeout(() => {
        update_user_info(`You can place ${user_reinforcements} troops`);
        trace_known_grids();
    }, 2000);
}


function scoring(){
    const round_info_idk = document.getElementById("round_info");
    round_info_idk.style.display = "none";
    let red_points = 0;
    let blue_points = 0;
    for (let row = 0; row < game_array.length; row++) {
        for (let col = 0; col < game_array[row].length; col++) {
            let cell_val = game_array[row][col];
            if (cell_val === "r") red_points++;
            else if (cell_val === "b") blue_points++;
        }
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00e1ffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 48px Pixelify Sans";
    ctx.textAlign = "center";
    ctx.fillText(`Blue: ${blue_points}  Red: ${red_points}`, canvas.width/2, canvas.height/2);

    if (blue_points > red_points) {
        ctx.fillText("Blue Wins!", canvas.width/2, canvas.height/2 + 60);
    } else if (red_points > blue_points) {
        ctx.fillText("Red Wins!", canvas.width/2, canvas.height/2 + 60);
    } else {
        ctx.fillText("It's a Draw!", canvas.width/2, canvas.height/2 + 60);
    }
}

// Main function
function main(){
    let battle_in_progress = false;
    // Hide button
    const start_btn = document.getElementById("start_btn");
    start_btn.style.display = "none";

    // Start Audio
    const audio = new Audio('../music/funky-quirky-upbeat-commercial-music-392401.mp3');
    audio.play();
    audio.volume = 0.5;
    // Fetch info from input page
    let location = localStorage.getItem("selected_map");
    // Check if there is anything. 
    if (!location) {
        console.log("No map selected, defaulting to standard");
        location = "standard";
    }
    // Set all of the infomation
    stage = "start"
    let user_ = new player("You")
    let enemy_ = new bot()
    //let running = true
    Start_Screen(user_, enemy_, () => {
        stage = "place"; 
        place_stage(location);
        console.log("Start completed")
    });
    // The click register outside of the loop
    document.addEventListener("click", function(event) {
        if (stage === "place" && user_reinforcements > 0){
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            let cell_width = canvas.width / 16;
            let cell_height = canvas.height / 8;
            let col = Math.floor(x / cell_width);
            let row = Math.floor(y / cell_height);
            if (game_array[row][col] === 0) {
                user_.add_troop(row, col);
                user_reinforcements--;
                update_user_info(`You can place ${user_reinforcements} troops`);
                if (user_reinforcements === 0){
                    enemy_.bot_place(enemy_reinforcements);
                }
            } else {
                console.log("Cell already occupied!");
            }
        }
    });
    // Core loop cause JS hates while loops for some reason lol
    setInterval(() => {
        if (stage === "place"){
            draw_grid(location);
            trace_known_grids();
            // 
        } else if (stage === "start"){
            // No action
        } else if (stage === "fighting") {
            if (!battle_in_progress) {
                battle_in_progress = true;
                battle(user_, enemy_);
            }
        }else if (stage === "scoring"){
            scoring()
            setTimeout(() => {
                window.location.href = "assets/pages/index.html";
            }, 2000);
            
        }else{
            alert("Something has gone wrong, please reload and try again.");
        }
    }, 1000);
}
start_button()