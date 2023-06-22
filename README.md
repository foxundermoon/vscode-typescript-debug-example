# In 2023, New Century TypeScript Debugging Methods


## `tsx` example
- `npm i tsx`
- add `.vscode/launch.json`
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "tsx debug",
      "type": "node",
      "request": "launch",
      "args": [
        "${relativeFile}"
      ],
      "runtimeArgs": [
        "--loader",
        "tsx"
      ],
      "cwd": "${workspaceRoot}",
      "internalConsoleOptions": "openOnSessionStart"
    }
  ]
}
```
![tsx example](img/tsx.png)

## `ts-node` example

- `npm i ts-node`
- add `.vscode/launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "ts-node debug",
      "type": "node",
      "request": "launch",
      "args": [
        "${relativeFile}"
      ],
      "runtimeArgs": [
        "-r",
        "ts-node/register"
      ],
      "cwd": "${workspaceRoot}",
      "internalConsoleOptions": "openOnSessionStart"
    }
  ]
}
```
![ts-node example](img/ts-node.png)


# enjoy typescript coding :)