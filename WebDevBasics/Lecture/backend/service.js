function SendData(data) {

try {
    let status;


$.ajax({
            url: "http://localhost:3000/login",
            type: "POST",
            data: data,
            contentType: "application/json",
            dataType: "json",
            success: function (result) {
                if(result) status = true;
            },
            error: function (error) {
                console.log(error);
                status = false;
           } }
        });
    }

    catch (error) {
        console.log(error);
        return false;
    }

    return status;