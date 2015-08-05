<script type="text/javascript">
function createTable()
{
    var num_ports = document.getElementById('ports').value;
    var num_super = document.getElementById('super').value;
    var num_rows = document.getElementById('rows').value;
    var num_cols = document.getElementById('cols').value;
    var tbody = '';
    var colStart = num_cols / num_super;
    for( var i=0; i<num_super; i++){
        var theader = '<div><table border="1">\n';
            for($u=1; $u<=num_rows; $u++){
              tbody += '<tr>';
                for( var j=0; j<colStart; j++)
                {
                tbody += '<td>';
                tbody += 'Cell ' + i + ',' + j;
                tbody += '</td>'
                }
        tbody += '</tr>\n';
    }
    var tfooter = '</table></div>';
    document.getElementById('wrapper').innerHTML = theader + tbody + tfooter;
}
}
