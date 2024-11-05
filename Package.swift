// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "KristianheljasCapacitorAppRestart",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "KristianheljasCapacitorAppRestart",
            targets: ["CapacitorAppRestartPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "CapacitorAppRestartPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/CapacitorAppRestartPlugin"),
        .testTarget(
            name: "CapacitorAppRestartPluginTests",
            dependencies: ["CapacitorAppRestartPlugin"],
            path: "ios/Tests/CapacitorAppRestartPluginTests")
    ]
)