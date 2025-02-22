async function loadProducts() {
    try {
        const match = window.location.pathname.match(/product(\d+)\.html/);
        if (!match) {
            console.error("ページのURLが不正です");
            return;
        }
        const productNumber = match[1];

        const response = await fetch(`./img/product${productNumber}/product${productNumber}.txt`);
        const text = await response.text();
        const texts = text.split("\n").map(line => line.trim()).filter(line => line);

        const container = document.getElementById("imageContainer");
        container.innerHTML = "";

        texts.forEach((text, index) => {
            const div = document.createElement("div");
            div.classList.add("item");

            const img = document.createElement("img");
            img.src = `./img/product${productNumber}/${productNumber}_${index + 1}.jpg`;
            img.alt = text;
            img.onerror = function () {
                this.src = "./img/no_image.jpg";
                this.alt = "No Image";
            };

            img.addEventListener("click", () => openModal(img.src, text)); // 画像クリックで拡大表示

            const caption = document.createElement("p");
            caption.textContent = text;

            div.appendChild(img);
            div.appendChild(caption);
            container.appendChild(div);
        });

        createModal(); // モーダル要素をページに追加
    } catch (error) {
        console.error("ファイルの読み込みに失敗しました", error);
    }
}

function createModal() {
    // モーダルのHTMLを作成
    const modal = document.createElement("div");
    modal.id = "imageModal";
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <img id="modalImage" src="" alt="">
            <p id="modalCaption"></p>
        </div>
    `;
    document.body.appendChild(modal);

    // 閉じる処理
    document.querySelector(".close").addEventListener("click", closeModal);
    modal.addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });
}

function openModal(src, caption) {
    const modal = document.getElementById("imageModal");
    document.getElementById("modalImage").src = src;
    document.getElementById("modalCaption").textContent = caption;
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

loadProducts();
