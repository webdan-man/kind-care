module.exports = {
    apps: [
        {
            name: "xnamq",
            script: "node_modules/next/dist/bin/next",
            args: "start",
            cwd: "/home1/xnamq2025/etc/xnamq.am",
            env: {
                NODE_ENV: "production",
                PORT: 3000
            }
        }
    ]
};
