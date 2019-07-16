let products = ['Sony Xperia', 'Samsung Galaxy', 'Nokia 6', 'Xiaomi Redmi Note 4',
    'Apple iPhone 6S', 'Xiaomi Mi 5s Plus', 'Apple iPhone 8 Plus', 'Fujitsu F-04E', 'Oppo A71'];
let result = "";

function showAllProducts(products) {
    let result = "";
    for (let i = 0; i < products.length; i++) {
        result += "<tr id=" + i + " class='class" + (i % 2) + "' style='height: 40px'>";
        result += "<td width='650px'>" + products[i] + "</td>";
        result += "<td width='200px'><input id='btnEditForm' class='button' type='button' value='Edit' " +
            "onclick='formEditProduct(products," + i + ")'></td>";
        result += "<td><input id='btnDelete' class='button' type='button' value='Delete'" +
            " onclick='deleteProduct(products," + i + ")' style='width: 100px'></td>";
        result += "</tr>";
    }
    return result;
}

function addNewProduct() {
    let product = document.getElementById("newproduct").value;
    products.push(product);
    run();
}

function formEditProduct(products, position) {
    let form = "";
    let value = products[position];
    form += "<div style='width: 700px;height: 125px;background: #f2f2f2'>";
    form += "<input type='text' id='editproduct' class='txt' value='" + value + "'>";
    form += "<br>";
    form += "<input type='button' id='btnEdit' class='button' onclick='editProduct(products," + position + ")' value='Edit' " +
        "style='margin-left: 15px;margin-top: 15px'>";
    form += "<input type='button' id='btnClose' class='button' onclick='closeEditForm()' value='X' style='margin-left: 15px'>";
    form += "</div>";
    document.getElementById("editform").innerHTML = form;
}

function editProduct(products, position) {
    let newValue = document.getElementById("editproduct").value;
    products[position] = newValue;
    run();
    closeEditForm();
}

function closeEditForm() {
    let closeEditForm = "";
    document.getElementById("editform").innerHTML = closeEditForm;
    run();
}

function deleteProduct(products, position) {
    products.splice(position, 1);
    run();
}

function run() {
    let value = products.length;
    result = "";
    document.getElementById("value").innerHTML = "" + value + " products";
    result = showAllProducts(products);
    document.getElementById("allproducts").innerHTML = result;
}