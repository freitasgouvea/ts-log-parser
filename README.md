# ts-log-parser

ts-log-parser is a Node TypeScript log parser program that processes log files and generates reports. 

It parses log files from a quake games and provides a summary of each game and players rank.

Before run this project, ensure you have [Node.js](https://nodejs.org) installed on your machine.

## Installation

Clone the repository or download the project files:

```bash
git clone https://github.com/freitasgouvea/ts-log-parser.git
```

Then navigate to the project directory:

```bash
cd ts-log-parser
```

And finally, install the project dependencies using npm:

```bash
npm install
```

## Usage

Run the following command to parse the log file located in `./src/log/quake.log` and generate the game report:

```bash
npm start
```

The game report, with all games stats and players rank, will be displayed in the console. Example: 

```
{"game_1":{"totalKills":7,"players":["Dono da Bola","Oootsimo","Isgalamido","Assasinu Credi","Zeh","Mal"],"kills":{"Zeh":2,"Assasinu Credi":2,"Isgalamido":1,"Dono da Bola":-1,"Mal":-1},"killByMeans":{"MOD_ROCKET_SPLASH":4,"MOD_ROCKET":1,"MOD_FALLING":1,"MOD_TRIGGER_HURT":1}}}
{"Zeh":2,"Assasinu Credi":2,"Isgalamido":1,"Dono da Bola":-1,"Mal":-1}
```

If you wanna specific game report for your game, you can update the log file in `./src/log/quake.log` with your logs.

## Test

If you want to run tests, you can use the following command:

```bash
npm test
```

This will execute the test suite using Jest and the results will show in the console.

## Contributing

Contributions to ts-log-parser are welcome! If you find any issues or want to enhance the project, feel free to submit a pull request.
