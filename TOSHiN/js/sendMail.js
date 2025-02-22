function sendMail() {
    var name = document.getElementById("name").value;
    var company = document.getElementById("company").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    var mailtoLink = "mailto:h.haruca1021@gmail.com"
        + "?subject=" + encodeURIComponent("お問い合わせ: " + name)
        + "&body=" + encodeURIComponent(
            "お名前: " + name + "\n" +
            "会社名: " + company + "\n" +
            "電話番号: " + phone + "\n" +
            "メールアドレス: " + email + "\n\n" +
            "お問い合わせ内容:\n" + message
        );
    
    window.location.href = mailtoLink;
}