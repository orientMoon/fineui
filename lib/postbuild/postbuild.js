const Concat = require("concat-with-sourcemaps");
const { resolve } = require("path");
const fs = require("fs");

function unionJs(filenames) {
    const filename = filenames[0];

    var concat = new Concat(true, filename, "\n");

    filenames.forEach(filename => {
        concat.add(
            filename,
            fs.readFileSync(resolve(__dirname, `../../dist/${filename}`)),
            fs.readFileSync(resolve(__dirname, `../../dist/${filename}.map`)).toString()
        );
    });

    const filenameParts = filename.split("/");

    concat.add(null, `//# sourceMappingURL=${filenameParts[filenameParts.length - 1]}.map`);
    
    var concatenatedContent = concat.content;
    var sourceMapForContent = concat.sourceMap;
    
    fs.writeFileSync(resolve(__dirname, "../../dist", filename), concatenatedContent, {
        encoding: "utf8",
    });
    
    fs.writeFileSync(resolve(__dirname, "../../dist", `${filename}.map`), sourceMapForContent, {
        encoding: "utf8",
    });
}

unionJs(["bundle.min.js", "es5.fineui.js"]);
unionJs(["bundle.ie.min.js", "ie.fineui.js"]);
unionJs(["fineui.min.js", "es5.fineui.js"]);
unionJs(["fineui.ie.min.js", "ie.fineui.js"]);
unionJs(["2.0/fineui.min.js", "es5.fineui.js"]);
unionJs(["2.0/fineui.ie.min.js", "ie.fineui.js"]);