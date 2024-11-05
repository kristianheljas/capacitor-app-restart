import Foundation

@objc public class CapacitorAppRestart: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
