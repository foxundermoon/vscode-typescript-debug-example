# typescript vscode debug example



## `ts-node` example

```json
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
```
![ts-node example](img/ts-node.png)


## `tsx` example
```json
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
```
![tsx example](img/tsx.png)