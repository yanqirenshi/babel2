<symbol-list>
    <table class="table is-bordered is-striped is-narrow is-hoverable">
        <thead>
            <tr>
                <th>type</th>
                <th>name</th>
                <th>package</th>
                <th>file</th>
                <th>description</th>
            </tr>
        </thead>
        <tbody>
            <tr each={this.opts.symbols}>
                <td>
                    <a href="#symbols/packages/{package}">
                        {package}
                    </a>
                </td>
                <td>
                    <a href="#symbols/packages/{package}/{type}">
                        {type}
                    </a>
                </td>
                <td>
                    <a href="#symbols/packages/{package}/{type}/{name}">
                        {name}
                    </a>
                </td>
                <td>{file}</td>
                <td>{description}</td>
            </tr>
        </tbody>
    </table>
</symbol-list>
