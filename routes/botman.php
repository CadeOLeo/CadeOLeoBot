<?php
use App\Http\Controllers\BotManController;
// Don't use the Facade in here to support the RTM API too :)
$botman = resolve('botman');

$botman->hears('Start conversation', BotManController::class.'@startConversation');

// $botman->hears('/calc', function($bot){
//     $bot->reply('hello!');
// });

$botman->fallback(function($bot) {
    /*
    {
      +"version": "v1.5.28"
      +"date1": "2015-10-22T00:00:00.000Z"
      +"date2": "2017-04-19T00:00:00.000Z"
      +"vLeoToday": true
    }
    */
    $cadeOLeoVer = json_decode(
        file_get_contents(
          env('URL_CADE_O_LEO_VER')
    ));



    $bot->reply(
        'Olá, ' . $bot->getUser()->getFirstName() . ', hoje a versão do Léo é: ' . $cadeOLeoVer->version . '. Quer saber a sua? Acessa lá: https://cadeoleo.github.io/'
    );
});