import Editor from '@monaco-editor/react';
import { useObservable } from '../utils/UseObservable';
import { currentSource } from '../logic/Decompiler';
import { useEffect, useRef } from 'react';
import { editor } from "monaco-editor";
import { isThin } from '../logic/Browser';

const Code = () => {
    const src = useObservable(currentSource);
    const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
    const hideMinimap = useObservable(isThin);

    // Scroll to top when source changes
    useEffect(() => {
        if (editorRef.current) {
            editorRef.current.setScrollPosition({ scrollTop: 0, scrollLeft: 0 });
            editorRef.current.setPosition({ lineNumber: 1, column: 1 });
        }
    }, [src]);

    return (
        <Editor
            height="100vh"
            defaultLanguage="java"
            theme="vs-dark"
            value={src}
            options={{
                readOnly: true,
                domReadOnly: true,
                tabSize: 3,
                minimap: { enabled: !hideMinimap }
            }}
            onMount={(editor) => { editorRef.current = editor; }} />
    );
}

export default Code;