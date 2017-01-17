**Filters**

If we have repeating records, we can get the power to filter them when user enters a filter criteria.

In simple terms, we need to create an input field for user to filter the ng-repeat records.

    Example:
        <input type="text" ng-model="filterRecords"/>
        
        <ul>
            <li>
                <a ng-click="filterRecords = 'Omnis'">Omnis</a>
            </li>
            
        </ul>
        
        <tr ng-repeat="record in records | filter:filterRecords">
            <td ng-bind="record.id"></td>
            <td ng-bind="record.userid"></td>
            <td ng-bind="record.book"></td>
        </tr>    
        
    In the above example, we have a search box inside which the user enter the record information that he/she is looking for.
    Angular will filter the ng-repeat records based on the ng-model text.
    This filtering will result to only one record if the exact text is entered.
    
    **REMEMBER THIS APPROACH SHOULD BE YOUR LAST RESORT SINCE THIRD PARTY PLUGINS PROVIDE BETTER FILTERING/SORTING MECHANISM.
    Also, every ng-repeat record has $index which tell angular about its distinction from others.
    When we are trying to filter the records, the $index gets messed up and it will rearrange based on the filtered records.
    Thus, we cannot target a particular ng-repeat record if $index keeps on changing with user's input.
    
    Alternatively, if we have to have to use this approach then we need to make use of array indices instead of $index.
    
    <tr ng-repeat="records[0]">
        <td ng-bind="records[0].id"></td>
        <td ng-bind="record[0].userid"></td>
        <td ng-bind="record[0].book"></td>
    </tr>
        
    <tr ng-repeat="records[1]">
        <td ng-bind="records[1].id"></td>
        <td ng-bind="record[1].userid"></td>
        <td ng-bind="record[1].book"></td>
    </tr>  
        
    <tr ng-repeat="records[2]">
        <td ng-bind="records[2].id"></td>
        <td ng-bind="record[2].userid"></td>
        <td ng-bind="record[2].book"></td>
    </tr>    
    
    $index -> records.indexof(1)
    
    ** WE CAN HAVE MULTIPLE FILTERS TO THE SAME ng-repeat RECORDS
    
____________________________________________________________________________________________________________________________________

**UNIT TESTING**

Whatever logic we write in our controllers, services, directives, etc. are needed to be tested.

We divide the entire code into small units and we test these units individually.

Since, production server doesnt have a GUI to test these codes, we need to provide the test in such a non-GUI way so that it will result out the correct logic.

In angular, there is test runner/server, called KARMA which is a small server that runs only the tests.

Whereas, we write the tests in JASMINE framework.



Karma                            -> is the local server which runs the tests

Jasmine                          -> is the framework using which we write the unit tests

PhantomJS                        -> is the headless/GUIless browser to capture our unit tests

Karma-coverage(Plugin:istanbul)  -> code coverage for reporting purpose