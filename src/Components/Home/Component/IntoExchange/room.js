////$(document).ready(function() {

////    if(sessionStorage.forType == undefined){
////        sessionStorage.forType = 1;
////    }
////    let lobbyid = $("#lobby-id").val();

////    $.ajax({
////        type: "get",
////        url: `/api/services/app/Formula/GetFormulaByLobbyId?lobbyId=${lobbyid}`,
////        headers: {
////            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
////                "content"
////            ),
////        },
////        timeout: 30000,
////        beforeSend: function () {
////            // Swal.fire({
////            //     title: "Connecting...",
////            //     allowOutsideClick: false,
////            // });
////            // swal.showLoading();
////        },
////        success: function (response) {
////            let data = response.result;
////            var selectedFormula = data.filter(function (item) { return (item.type == sessionStorage.forType);})[0];
////            var arrayData = selectedFormula.value.map(obj => {
////                let rObj = {}
////                rObj['data'] = obj                          
////                return rObj
////            });
               
////            sessionStorage.setItem('formula', JSON.stringify(arrayData));
////            initialize();
////        },
////        error: function (jqXHR, textStatus, errorThrown) {
////            swal.close();
////            // console.log("Error");
////            Swal.fire({
////                type: "error",
////                title: "Cannot Fetch Data",
////                text: "Error while fetching data for lobby. Contact support",
////            });
////        },
////    });

////});
var firstRunSendWS = true;
(function () {
    // your page initialization code here
    // the DOM will be available here
    if (sessionStorage.forType == undefined) {
        sessionStorage.forType = 1;
    }
    let lobbyid = $("#lobby-id").val();

    $.ajax({
        type: "get",
        url: `/api/services/app/Formula/GetFormulaByLobbyId?lobbyId=${lobbyid}`,
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                "content"
            ),
        },
        timeout: 30000,
        beforeSend: function () {
            // Swal.fire({
            //     title: "Connecting...",
            //     allowOutsideClick: false,
            // });
            // swal.showLoading();
        },
        success: function (response) {
            let data = response.result;
            var selectedFormula = data.filter(function (item) { return (item.type == sessionStorage.forType); })[0];
            var arrayData = selectedFormula.value.map(obj => {
                let rObj = {}
                rObj['data'] = obj
                return rObj
            });

            sessionStorage.setItem('formula', JSON.stringify(arrayData));
            initialize();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            swal.close();
            // console.log("Error");
            Swal.fire({
                type: "error",
                title: "Cannot Fetch Data",
                text: "Error while fetching data for lobby. Contact support",
            });
        },
    });
})();

function initialize(){
    let url = new URL(window.location.href);
    let path = url.pathname.split('/');

    let roomid = $('#room-id')
    var predata = "";
    var count = 0;

    var str = "" + roomid;
    var pad = "000";
    var ans = pad.substring(0, pad.length - str.length) + str;
    // document.title = "BACCARAT - " + ans;

    var x = JSON.parse(sessionStorage.getItem('formula'));
    document.getElementById(`fomula${sessionStorage.forType}`).style.color = 'khaki';
    document.getElementById(`mb_fomula${sessionStorage.forType}`).classList.add('text-khali');
    var firstrun = true;

    ghtml = '';
    for (var i = 0; i < 38; i++) {
        ghtml += '<tr>';
        for (var j = 0; j < 60; j++) {
            if (i == 26) ghtml += '<td style="border: 1px solid rgba(255,255,255,0.2);background-color: #ff0033;width: 7px;height: 1px;"></td>';
            else ghtml += '<td style="border: 1px solid rgba(255,255,255,0.2);width: 7px;height: 7px;"></td>';
        }
        ghtml += '</tr>';
    }
    document.getElementById('graph_tbl').innerHTML = ghtml;

    var graph_row = document.getElementById("graph_tbl").rows.length;
    // document.getElementById("graph_tbl").rows[graph_row-1].cells[31].scrollIntoView(false);

    function tblStack(result) {
        let sTable = document.getElementById("tbl_stack");
        let stackRowC = sTable.rows.length;
        let stackRow = sTable.insertRow(stackRowC);
        let stackCol1 = stackRow.insertCell(0);
        let stackCol2 = stackRow.insertCell(1);
        let stackCol3 = stackRow.insertCell(2);
        stackCol1.innerHTML = stackRowC + 1;
        if (result) {
            stackCol3.innerHTML ="win";
            stackCol2.innerHTML = stack;
            stackCol3.style.backgroundColor = "#28a745";
        } else {
            stackCol3.innerHTML = "lose";
            stackCol2.innerHTML = '-';
            stackCol3.style.backgroundColor = "#dc3545";
        }
        let objDiv = document.getElementById("tbl_stack");
        objDiv.scrollTop = objDiv.scrollHeight;
        document.getElementById('total').innerHTML = stackRowC + 1;
        document.getElementById('win').innerHTML = win;
        document.getElementById('lose').innerHTML = active - win;
    }
    function chkresult(s) {
        if (predict == s) {
            win++;
            axisY--;
            if (axisY == g_line) axisY--;
            document.getElementById("graph_tbl").rows[axisY].cells[axisX].style.backgroundColor = "#ccff00";
            // document.getElementById("graph_tbl").rows[axisY].cells[axisX].scrollIntoView(false);
            rate = Math.round((win / active) * 100);
            document.getElementById('winrate').innerHTML = rate + "%";
            document.getElementById('prestat').innerHTML = rate + "%";
            // document.getElementById('nextPre').innerHTML = "Next Match";
            axisX++;
            tblStack(true);
            stack = 1;
            // console.log("Win : " + win + " Active : " + active + " Stack : " + stack);
        } else if (predict != "") {
            axisY++;
            if (axisY > (g_line + 10)) axisY = g_line + 10;
            if (axisY == g_line) axisY++;
            document.getElementById("graph_tbl").rows[axisY].cells[axisX].style.backgroundColor = "#ff00cc";
            // document.getElementById("graph_tbl").rows[axisY].cells[axisX].scrollIntoView(false);
            if (active > 0) {
                if (stack < 3) {
                    active--;
                    stack++;
                    document.getElementById('nextPre').innerHTML = "( Stack" + stack + "/ 3)";
                } else {
                    rate = Math.round((win / active) * 100);
                    document.getElementById('winrate').innerHTML = rate + "%";
                    document.getElementById('prestat').innerHTML = "The statistics of the past" + rate + "%";
                    tblStack(false);
                    stack = 1;
                    // document.getElementById('nextPre').innerHTML = "Next Match";
                }
            }
            axisX++;
            // console.log("Win : " + win + " Active : " + active + " Stack : " + stack);
        }
        if (slot.length == x[0].data.length - 1) slot = slot.substring(1, x[0].data.length - 1);
        slot += s;
        for (let i = 0; i < x.length; i++) {
            if (slot == x[i].data.substring(0, x[i].data.length - 1)) {
                // console.log(slot);
                document.getElementById('nextPre').innerHTML = "( Stack" + stack + "/ 3)";
                active++;
                predict = x[i].data.charAt(x[i].data.length - 1);
                return true;
            }
            predict = "";
        }
        return false;
    }


    function reduceCredit(symbol) {
        $.ajax({
            url: "/api/services/app/User/ReduceCredit",
            type : 'POST', // type of the HTTP request
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                    "content"
                ),
            },
            timeout: 30000,
        }).done(function(msg) {
            var credit = msg.result;
            if(credit < 0) {
                window.location.href = "/";
            } else {
                let picurl = "../img/room/symbol_" + symbol + ".png";
                Swal.fire({
                    imageUrl: picurl,
                    animation: false,
                    width: 200,
                    background: 'rgba(0,0,0,0)',
                    showConfirmButton: false,
                    timer: 2000,
                    customClass: {
                        popup: 'animated flip'
                    }
                });
                let creditClass = $(".credit-text");
                for(let i = 0; i < creditClass.length; i++){
                    // console.log(creditClass[i]);
                    $(creditClass[i]).text(credit);
                }
                // $('#navCredit').html('<img src="resource../img/room/new/credit.png" style="height:100%;"> &nbsp;' + strcredit + ' &nbsp;');
                // $('#showCreditM').html('Credit : ' + strcredit);
            }
        });
    }

    function showdata(data) {
        // if () {
        if (predata != data) {
            // console.log(data);
            res = data.split("");
            if (res[0] == '' && count != 0) window.location.reload();
            predata = data;

            banker = 0;
            player = 0;
            equal = 0;
            active = 0;
            win = 0;
            stack = 1;
            slot = "";
            row = 0;
            col = -1;
            count = 0;
            predict = "";
            waittime = 30;
            g_line = 26;
            axisY = g_line;
            axisX = 1;
            document.getElementById("tbl_stack").innerHTML = "";

            if (!firstrun) {
                counter = setInterval(timer, 1000); //1000 will  run it every 1 second
                function timer() {
                    waittime = waittime - 1;
                    console.log(waittime);
                    if (waittime < 0) {
                        clearInterval(counter);
                        // document.getElementById('countdown').style.fontSize = '250%';
                        // document.getElementById('countdown').innerHTML = "Wait for results ..";
                        document.getElementById('countdown2').style.color = 'white';
                        document.getElementById('countdown2').innerHTML = "Chờ một chút ...";
                        return;
                    }
                    // document.getElementById('countdown').style.fontSize = '400%';
                    // document.getElementById('countdown').innerHTML = waittime;
                    document.getElementById('countdown2').style.color = 'Orange';
                    document.getElementById('countdown2').innerHTML = "Vòng tiếp theo sẽ bắt đầu trong " + waittime + " giây";
                }
            }
            for (let i = 0; i < 72; i++) {
                if ((i % 6) == 0) col++;
                if (res[i] == 'B') {
                    // html = '<img src="./resource../img/room/new/asset/'+ sessionStorage.forType +'/symbol_b_small.png" style="height:30px;">';
                    html = '<img src="../img/room/symbol_b_small.png" style="height:30px;">';
                    banker++;
                    count++;
                    chkresult('b');
                } else if (res[i] == 'P') {
                    //html = '<img src="./resource../img/room/symbol_p_small.png">';
                    // html = '<img src="./resource../img/room/new/asset/'+ sessionStorage.forType +'/symbol_p_small.png" style="height:30px;">';
                    html = '<img src="../img/room/symbol_p_small.png" style="height:30px;">';
                    
                    player++;
                    count++;
                    chkresult('p');
                } else if (res[i] == 'T') {
                    //html = '<img src="./resource../img/room/symbol_t_small.png">';
                    // html = '<img src="./resource../img/room/new/asset/'+ sessionStorage.forType +'/symbol_t_small.png" style="height:30px;">';
                    html = '<img src="../img/room/symbol_t_small.png" style="height:30px;">';
                    
                    equal++;
                    count++;
                    if (predict != "") {
                        document.getElementById("graph_tbl").rows[axisY].cells[axisX].style.backgroundColor = "#ff3300";
                        // document.getElementById("graph_tbl").rows[axisY].cells[axisX].scrollIntoView(false);
                        axisX++;
                    }
                } else {
                    html = '<img src="" style="height: 24px;width: 24px;">';
                }

                document.getElementById("rtable").rows[i % 6].cells[col].innerHTML = html;
            }
            switch (predict) {
                case 'b':
                    // html = '<img src="./resource../img/room/new/asset/'+ sessionStorage.forType +'/symbol_b.png" style="height:60px;">';
                    html = '<img src="../img/room/symbol_b.png" style="height:60px;">';
                    reduceCredit('b');
                    break;
                case 'p':
                    // html = '<img src="./resource../img/room/new/asset/'+ sessionStorage.forType +'/symbol_p.png" style="height:60px;">';
                    html = '<img src="../img/room/symbol_p.png" style="height:60px;">';
                    reduceCredit('p');
                    break;
                case 't':
                    // html = '<img src="./resource../img/room/new/asset/'+ sessionStorage.forType +'/symbol_t.png" style="height:60px;">';
                    html = '<img src="../img/room/symbol_t.png" style="height:60px;">';
                    reduceCredit('t');
                    break;
                default:
                    html = 'Analyzing..';
            }
            document.getElementById('predict').innerHTML = html;

            // console.log(count);

            if (count > 0) {
                document.getElementById('bstr').innerHTML = Math.round((banker / count) * 100) + "%";
                document.getElementById('pstr').innerHTML = Math.round((player / count) * 100) + "%";
                document.getElementById('tstr').innerHTML = Math.round((equal / count) * 100) + "%";

                document.getElementById("redbar").style.width = Math.round((banker / count) * 100) + "%";
                document.getElementById("blubar").style.width = Math.round((player / count) * 100) + "%";
                document.getElementById("grnbar").style.width = Math.round((equal / count) * 100) + "%";
            }


            document.getElementById('countB').innerHTML = banker;
            document.getElementById('countP').innerHTML = player;
            document.getElementById('countT').innerHTML = equal;

            document.getElementById('bfoot').innerHTML = 'B ' + banker;
            document.getElementById('pfoot').innerHTML = 'P ' + player;
            document.getElementById('tfoot').innerHTML = 'T ' + equal;

            firstrun = false;
        }
        // else {
        //   Swal.fire({
        //     type: 'error',
        // title: 'You do not have enough Credits to use this service',
        // text: 'Please top up before continuing to use'
        //   });
        //   setTimeout(function() {
        //     window.history.back();
        //   }, 3000);
        // }
    }

    function sendWS() {
        let lobbyid = $("#lobby-id").val();
        let roomid = $("#room-id").val();
        $.ajax({
            url: `/api/services/app/Table/GetTablesByLobbyId?lobbyId=${lobbyid}`, // my php file
            type: 'GET', // type of the HTTP request
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                    "content"
                ),
            },
            success: function (data) {
                var obj = data.result;
                var currRoom = obj.filter(function (item) { return (item.name == roomid);})[0];
                showdata(currRoom.resultsString);
                //console.log(arr);
            }
        });
    }
    if (firstRunSendWS) {
        firstRunSendWS = false;
        setInterval(sendWS, 2000);
    }
}

function back(){
    var ref = document.referrer;
    let domain = window.location.hostname;

    // console.log("clicked");
    if (ref.includes(domain) && ref === window.location.href){
        // window.location=document.referrer;
        let route = ref.split('/');
        let previousPage = '/' + route[3] + '/lobby';

        window.location = previousPage;
    }
    else if(ref.includes(domain) && ref !== window.location.href){
        window.location=document.referrer;
    }
    else{
        window.location='/';
    }
}