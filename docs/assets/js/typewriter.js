document$.subscribe(() => {
    const instance = new Typewriter('#typewriter', {
        strings: ['market makers', 'algo traders', 'liquidity miners', 'quant developers', 'bot traders', 'data scientists'],
        autoStart: true,
    });
})