const x = "HEllo";

function Hello() {
    console.log(x);
    return x;
}

async function main() {
    await new Promise((resolve) => {
        setTimeout(resolve, 10000); // Wait for 100 seconds
    });
    Hello();
    const y = Hello();
    console.log(y);
}

main();
