var db = null;
var newData = true;

// document.getElementById("add").addEventListener("click", insertData);

var isCompleted = {
    value: 0
};

document.addEventListener('deviceready',
    function () {
        db = window.sqlitePlugin.openDatabase({
            name: 'my.db',
            location: 'default',
        });
        // alert("device ready");
        db.transaction(function (tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS todo(id integer primary key autoincrement, isi text)');
        }, function (error) {
            console.log(error.message);
        }, function () {
            console.log();
            tampilData();
        }
        );
    }
);

function tampilData() {
    // alert("tampil data");
    db.transaction(function (tx) {
        tx.executeSql("SELECT * FROM todo", [], function (tx, rs) {
			// alert(rs.rows.item(0).id);
            var tbtodoList = '<h2 style="text-align: left; color: white; padding-left: 10%;">List :</h2>';
            for (i = 0; i < rs.rows.length; i++) {
                tbtodoList += '<div id="maindiv" value=" ' + rs.rows.item(i).id + ' "><span><p class="Lists" id="ListItem"> ' + rs.rows.item(i).isi + ' </p></span><button class="coptions" onclick="hapusData(' + rs.rows.item(i).id + ')">&#9745;</button><br></div>';
            }
            // <button class="coptions" onclick="complete(ListItem' + rs.rows.item(i).id + ')">✔️</button>
            document.getElementById("List").innerHTML = tbtodoList;
        }, function (tx, error) {
            console.log("gagal menampilkan")
        }
        )
    })
}

function kosongInput() {
    document.getElementById("todo").value = "";
}

function insertData() {
    // alert("Insert");
    var isi = document.getElementById('todo').value;
    if (isi == "") {
        alert("please enter something");
    } else {
        db.transaction(function (tx) {
            tx.executeSql('INSERT INTO todo VALUES(?1,?2)', [, isi]);
        }, function (error) {
            alert('Transaction ERROR: ' + error.message);
        }, function () {
            // alert('berhasil');
            kosongInput();
            tampilData();
        }
        )

    }

}

function hapusData(id) {
    db.transaction(function (tx) {
        tx.executeSql("DELETE FROM todo WHERE id = ?", [id],
            function (tx, res) {
                console.log("data terhapus");
                kosongInput();
                tampilData();
            }, function (tx, error) {
                console.log("gagal hapus");
            }
        )
    })
}


function complete(id) {
    var idNum = document.getElementById(id);

    // if (!isCompleted.value) {
    //     idNum.style.backgroundImage = "linear-gradient(to left,rgb(20, 215, 4 ),rgb(210, 244, 208 )";
    // }
    // else {
    //     idNum.style.backgroundImage = "linear-gradient(to left,rgb(153, 0, 0), rgb(255, 51, 51))";
    // }
    // isCompleted.value = !isCompleted.value;

}