function myPromise()
{
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 1);
    });
}

async function screamer()
{
    const uli = document.querySelector("#uli");
    uli.style.display = "inline-block";
    n = 1;
    while (uli.style.transform != "scale(7)")
    {
        await myPromise();
        n += 0.02;
        uli.style.transform = `scale(${n})`;
    }
    document.querySelector(".blackContainer").style.display = "inline-block";
}
