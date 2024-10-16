"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const sidebar_1 = __importDefault(require("../../../components/common/sidebar"));
const navbar_1 = __importDefault(require("../../../components/common/navbar"));
const request_1 = require("../../../configs/request");
const listItem_1 = __importDefault(require("../../../components/base/listItem"));
const listheader_1 = __importDefault(require("../../../components/base/listheader"));
const modal_1 = __importDefault(require("../../../components/base/modal"));
const index_1 = __importDefault(require("../../../components/base/Button/index"));
const react_hot_toast_1 = require("react-hot-toast");
const index_2 = __importDefault(require("../../../components/base/Input/index"));
function SuperAdminGroups() {
    const token = (0, react_redux_1.useSelector)((state) => state.auth.token);
    const collapse = (0, react_redux_1.useSelector)((state) => state.sidebar.collapse);
    const [groupList, setGroupList] = (0, react_1.useState)([]);
    const getGroups = () => __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield (0, request_1.sendRequest)({
                route: "groups/",
                token,
            });
            if (response.status === 200) {
                setGroupList(response.data);
            }
        }
        catch (err) {
            console.error(err);
        }
    });
    (0, react_1.useEffect)(() => {
        getGroups();
    }, []);
    const [deleteModalState, setdeleteModalState] = (0, react_1.useState)({
        open: false,
        id: "",
    });
    const activateDeleteModal = (id) => {
        setdeleteModalState(Object.assign(Object.assign({}, deleteModalState), { open: true, id: id }));
    };
    const deleteGroup = (id) => __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield (0, request_1.sendRequest)({
                method: "DELETE",
                route: `groups/${id}`,
                token,
            });
            if (response.status === 200) {
                const newArr = groupList.filter((group) => {
                    return group._id !== id;
                });
                setdeleteModalState(Object.assign(Object.assign({}, deleteModalState), { open: false }));
                react_hot_toast_1.toast.success("Group Deleted Successfully", { duration: 2500 });
                setGroupList(newArr);
            }
        }
        catch (err) {
            console.error(err);
            setdeleteModalState(Object.assign(Object.assign({}, deleteModalState), { open: false }));
            react_hot_toast_1.toast.error("Couldn't Delete Group", { duration: 4000 });
        }
    });
    const [createModalState, setCreateModalState] = (0, react_1.useState)({
        open: false,
        type: "create",
    });
    const [groupData, setGroupData] = (0, react_1.useState)({
        _id: "",
        name: "",
    });
    const activateCreateModal = () => {
        setGroupData(Object.assign(Object.assign({}, groupData), { _id: "", name: "" }));
        setCreateModalState(Object.assign(Object.assign({}, createModalState), { open: true, type: "create" }));
    };
    const createGroup = () => __awaiter(this, void 0, void 0, function* () {
        const { _id } = groupData, restData = __rest(groupData, ["_id"]);
        const asArray = Object.entries(restData);
        const filtered = asArray.filter(([key, value]) => value !== null && value !== "");
        const finalData = Object.fromEntries(filtered);
        try {
            const response = yield (0, request_1.sendRequest)({
                method: "POST",
                route: `groups`,
                body: finalData,
                token,
            });
            if (response.status === 200) {
                setCreateModalState(Object.assign(Object.assign({}, createModalState), { open: false }));
                getGroups();
                react_hot_toast_1.toast.success("Group created successfully", { duration: 2500 });
            }
            else {
                setCreateModalState(Object.assign(Object.assign({}, createModalState), { open: false }));
                react_hot_toast_1.toast.error("Couldn't Create, Try Again", { duration: 4000 });
            }
        }
        catch (err) {
            console.error(err);
            setCreateModalState(Object.assign(Object.assign({}, createModalState), { open: false }));
            react_hot_toast_1.toast.error("Couldn't Create, Try Again", { duration: 2500 });
        }
    });
    const activateEditModal = (data) => {
        const group = JSON.parse(data);
        setGroupData(Object.assign(Object.assign({}, groupData), { _id: group._id, name: group.name }));
        setCreateModalState(Object.assign(Object.assign({}, createModalState), { open: true, type: "edit" }));
    };
    const updateGroup = () => __awaiter(this, void 0, void 0, function* () {
        const { _id } = groupData, restData = __rest(groupData, ["_id"]);
        try {
            const response = yield (0, request_1.sendRequest)({
                method: "POST",
                route: `groups/${groupData._id}`,
                body: restData,
                token,
            });
            if (response.status === 200) {
                setCreateModalState(Object.assign(Object.assign({}, createModalState), { open: false }));
                getGroups();
                react_hot_toast_1.toast.success("Group updated successfully", { duration: 2500 });
            }
            else {
                setCreateModalState(Object.assign(Object.assign({}, createModalState), { open: false }));
                react_hot_toast_1.toast.error("Couldn't Update, Try Again", { duration: 4000 });
            }
        }
        catch (err) {
            console.error(err);
            setCreateModalState(Object.assign(Object.assign({}, createModalState), { open: false }));
            react_hot_toast_1.toast.error("Couldn't Update, Try Again", { duration: 2500 });
        }
    });
    const [filters, setfilters] = (0, react_1.useState)({
        searchQuery: "",
    });
    const filterBySearch = (groupList, query) => {
        if (!query) {
            return groupList;
        }
        const lowerCaseQuery = query.toLowerCase();
        return groupList.filter((group) => {
            const name = group.name.toLowerCase();
            return name.includes(lowerCaseQuery);
        });
    };
    const filterObjects = (query) => {
        setfilters(Object.assign(Object.assign({}, filters), { searchQuery: query }));
    };
    return (react_1.default.createElement("div", { className: "flex" },
        react_1.default.createElement(sidebar_1.default, { items: ["Dashboard", "Users", "Groups", "Account"], selected: "Groups" }),
        react_1.default.createElement("div", { className: `flex flex-col w-full ${collapse ? "ml-20" : "ml-52"}` },
            react_1.default.createElement(navbar_1.default, { label: "Groups", buttonLabel: "+ Create Group", buttonAction: () => activateCreateModal() }),
            react_1.default.createElement("div", null,
                react_1.default.createElement(react_hot_toast_1.Toaster, null)),
            react_1.default.createElement(modal_1.default, { showModal: createModalState.open, onRequestClose: () => setCreateModalState(Object.assign(Object.assign({}, createModalState), { open: !createModalState.open })) },
                react_1.default.createElement("div", { className: "text-xl" }, "Create/Edit User"),
                react_1.default.createElement("div", { className: "flex flex-col flex-wrap justify-center content-center w-96" },
                    react_1.default.createElement("div", { className: "flex gap-5 w-full" },
                        react_1.default.createElement(index_2.default, { label: "Name", placeholder: "name", value: groupData.name, onChange: (e) => {
                                setGroupData(Object.assign(Object.assign({}, groupData), { name: e.target.value }));
                            }, required: true }))),
                react_1.default.createElement("div", { className: "flex w-full justify-center gap-10 mt-5" },
                    react_1.default.createElement(index_1.default, { label: "Cancel", color: "text-gunmetal", bgColor: "bg-neutral-100", hoverColor: "hover:bg-neutral-600", onClick: () => setCreateModalState(Object.assign(Object.assign({}, createModalState), { open: false })) }),
                    createModalState.type === "edit" ? (react_1.default.createElement(index_1.default, { label: "Update", bgColor: "bg-primary-500", hoverColor: "hover:bg-primary-700", onClick: () => updateGroup() })) : (react_1.default.createElement(index_1.default, { label: "Create", bgColor: "bg-primary-500", hoverColor: "hover:bg-primary-700", onClick: () => createGroup() })))),
            react_1.default.createElement(modal_1.default, { showModal: deleteModalState.open, onRequestClose: () => setdeleteModalState(Object.assign(Object.assign({}, deleteModalState), { open: !deleteModalState.open })) },
                react_1.default.createElement("div", { className: "text-xl" }, "Are you sure you want to delete?"),
                react_1.default.createElement("div", { className: "flex w-full justify-center gap-10 mt-5" },
                    react_1.default.createElement(index_1.default, { label: "Cancel", color: "text-gunmetal", bgColor: "bg-neutral-100", hoverColor: "hover:bg-neutral-600", onClick: () => setdeleteModalState(Object.assign(Object.assign({}, deleteModalState), { open: false })) }),
                    react_1.default.createElement(index_1.default, { label: "Delete", bgColor: "bg-red-400", hoverColor: "hover:bg-red-500", onClick: () => deleteGroup(deleteModalState.id) }))),
            react_1.default.createElement("div", { className: "p-10 pb-2" },
                react_1.default.createElement("div", { className: "flex content-center justify-center py-2 px-5 gap-5 rounded-lg bg-primary-200" },
                    react_1.default.createElement("div", { className: "flex flex-wrap content-center w-1/2" },
                        react_1.default.createElement(index_2.default, { label: "Search", placeholder: "Search by name", onChange: (e) => filterObjects(e.target.value) })))),
            react_1.default.createElement("div", { className: "p-10 pt-3" },
                react_1.default.createElement(listheader_1.default, { items: [
                        "Name",
                        "Admins Count",
                        "Members Count",
                        "Actions",
                    ] }),
                filterBySearch(groupList, filters.searchQuery).map((group, index) => {
                    return (react_1.default.createElement(listItem_1.default, { key: index, items: [
                            // group._id,
                            group.name,
                            group.admins.length.toString(),
                            group.members.length.toString(),
                        ], object: group, onEdit: (data) => activateEditModal(data), onDelete: (id) => activateDeleteModal(id) }));
                })))));
}
exports.default = SuperAdminGroups;
